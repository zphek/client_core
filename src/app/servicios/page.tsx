'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect, useState } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SlideOutRow from "@/components/SlideoutRow/SlideOutRow";
import { render } from "react-dom";
import { send_request } from "@/helpers/sendreq";

interface Service {
  ID: number;
  service_name: string;
  services_description: string;
  price: string;
  isVisible: boolean;
}

const SERVICIOS: NextPage = () => {
    const [data, setData] = useState<Service[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState<{ [index: number]: boolean }>({});

    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);

      send_request('get', 'http://34.229.4.128:3000/services/get', null, 12345)
      .then(({data})=>{
        setData(data);
      })
    }, [])

    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

    const handleDelete = (index: number) => {
      setDeletingIndex(index);

      setTimeout(() => {
        setData((prevItems) => prevItems.filter((_, i) => i !== index));
        setDeletingIndex(null);
      }, 500); // Adjust the delay as needed
    };

    const renderCell = (key: keyof Service, value: Service[keyof Service]) => {
    };

    const getEditRoute = (item: Service) => {
      setSelectedUserId(item.ID);
      setIsEditModalOpen(true);
    };

    return (
      <div className="flex flex-col justif-around w-[100%] bg-slate-200/60 max-h-screen">
        <div className="h-10 bg-white">
  
        </div>
        <div className="bg-white p-6">
          <h2 className="font-extrabold text-4xl">Servicios</h2>
          <h3 className="text-slate-600 text-2xl">Manejar los servicios dentro de la aplicación.</h3>
  
          <div className="flex gap-x-3 mt-5">
            <div className="flex items-center bg-slate-200/50 flex-grow px-3 py-2 gap-x-2 rounded-lg">
              <FontAwesomeIcon icon={faSearch} size="lg" className="text-gray-500/50"/>
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none" placeholder="Escribe para filtrar..."/>
            </div>
  
            <Link href={'/servicios/create'} className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NUEVO SERVICIO
            </Link>
          </div>
        </div>
  
        <div className="min-w-full h-screen overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombres</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripcion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {data.length > 0 && data.map((item, index) => (
                <tr key={index} className={`'bg-red-100'} hover:bg-slate-100 transition-[400ms] ${isDeleting[index] ? 'translate-x-full' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.service_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.services_description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      className="hover:text-red-500 transition-all cursor-pointer"
                      onClick={() => handleDelete(index)}
                    />
                    <button onClick={() => getEditRoute(item)}>
                      <FontAwesomeIcon
                        icon={faPencil}
                        size="lg"
                        className="hover:text-blue-500 transition-all"
                      />
                    </button>
                  </td>
                </tr>
              ))  }
            </tbody>
          </table>
        </div>
  
      </div>
    );
};

export default SERVICIOS;