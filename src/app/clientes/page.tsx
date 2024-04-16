'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect, useState } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SlideOutRow from "@/components/SlideoutRow/SlideOutRow";
import { send_request } from "@/helpers/sendreq";

interface Client {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const CLIENTES: NextPage = () => {
    const [data, setData] = useState<Client[]>([
      { name: 'Bernardo Baez 1', username: 'bernardob', email: 'bernardo@gmai.com' , phone: '809-555-5555'},
      { name: 'Bernardo Baez 2', username: 'bernardob', email: 'bernardo@gmai.com' , phone: '809-555-5555'},
      { name: 'Bernardo Baez 3', username: 'bernardob', email: 'bernardo@gmai.com' , phone: '809-555-5555'},
      { name: 'Bernardo Baez 4', username: 'bernardob', email: 'bernardo@gmai.com' , phone: '809-555-5555'}
    ]);

    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);

      send_request('get', 'http://34.229.4.148:3000/clients/get', null, 12345)
      .then(({data})=>{
        setData(data);
      })
      .catch(error=>{

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

    const renderCell = (key: keyof Client, value: Client[keyof Client]) => {
      switch (key) {
        case 'username':
          return (
            <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
              {value}
            </div>
          );
        default:
          return <>{value}</>;
      }
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) =>(
                <SlideOutRow
                key={index}
                index={index}
                item={item}
                onDelete={handleDelete}
                isDeleting={index === deletingIndex}
                renderCell={renderCell}
                getEditRoute={() => `/clientes/edicion`}
                />
              ))}
            </tbody>
          </table>
        </div>
  
      </div>
    );
};

export default CLIENTES;