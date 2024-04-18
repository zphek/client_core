'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect, useState } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SlideOutRow from "@/components/SlideoutRow/SlideOutRow";
import { send_request } from "@/helpers/sendreq";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Client {
  ID: number;
  client_fullname: string;
  email: string;
  phone_number: string;
}

const CLIENTES: NextPage = () => {
    const [data, setData] = useState<Client[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState<{ [index: number]: boolean }>({});

    const setUrl = usePageStore((state) => state.changeUrl);

    const notify = (notiType: number) => {
      if(notiType == 1){
          return toast.success("The register was successfully deleted!",  {
              position: "bottom-right"
          });
      } else {
          return toast.error("The register was not deleted.",  {
              position: "bottom-right"
          });
      }
  }

    useEffect(()=>{
      setUrl(window.location.pathname);

      send_request('get', 'http://34.229.4.148:3000/clients/get', null, 12345)
      .then(({data})=>{
        setData(data);
      });

    }, [])

    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

    const handleDelete = (index: number) => {
      setDeletingIndex(index);

      send_request('delete', "http://34.229.4.148:3000/clients/delete/" + index, null, 12345)
      .then(({data})=>{
        notify(1)
      }).catch(err=>{
        notify(2)
      })

      setTimeout(() => {
        setData((prevItems) => prevItems.filter((_, i) => i !== index));
        setDeletingIndex(null);
      }, 500); // Adjust the delay as needed
    };

    const getEditRoute = (item: Client) => {
      setSelectedUserId(item.ID);
      setIsEditModalOpen(true);
    };

    

    return (
      <div className="flex flex-col justif-around w-[100%] bg-slate-200/60 max-h-screen">
        <div className="h-10 bg-white">
  
        </div>
        <div className="bg-white p-6">
          <h2 className="font-extrabold text-4xl">Clientes</h2>
          <h3 className="text-slate-600 text-2xl">Manejar clientes dentro de la aplicación.</h3>
  
          <div className="flex gap-x-3 mt-5">
            <div className="flex items-center bg-slate-200/50 flex-grow px-3 py-2 gap-x-2 rounded-lg">
              <FontAwesomeIcon icon={faSearch} size="lg" className="text-gray-500/50"/>
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none" placeholder="Escribe para filtrar..."/>
            </div>
  
            <Link href={'/clientes/create'} className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NUEVO CLIENTE
            </Link>
          </div>
        </div>
  
        <div className="min-w-full h-screen overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombres</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {data.length > 0 ? data.map((item, index) => (
                <tr key={index} className={`'bg-red-100'} hover:bg-slate-100 transition-[400ms] ${isDeleting[index] ? 'translate-x-full' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.client_fullname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.phone_number}</td>
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
              )) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
        <ToastContainer/>
      </div>
    );
};

export default CLIENTES;