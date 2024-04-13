'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect, useState } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SlideOutRow from "@/components/SlideoutRow/SlideOutRow";

interface Factura {
  ID: number,
  client: string,
  date: string,
  total_amount: string,
}

const FACTURAS: NextPage = () => {
    const [data, setData] = useState<Factura[]>([
      { ID: 1, client: 'Bernardo Baez 1', date: '2021-10-10', total_amount: '$1000.00', },
      { ID: 2, client: 'Bernardo Baez 2', date: '2021-10-10', total_amount: '$1000.00', },
      { ID: 3, client: 'Bernardo Baez 3', date: '2021-10-10', total_amount: '$1000.00', },
      { ID: 4, client: 'Bernardo Baez 4', date: '2021-10-10', total_amount: '$1000.00', },
      { ID: 5, client: 'Bernardo Baez 5', date: '2021-10-10', total_amount: '$1000.00', },
      { ID: 6, client: 'Bernardo Baez 6', date: '2021-10-10', total_amount: '$1000.00', },
    ]);

    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])

    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

    const handleDelete = (index: number) => {
      setDeletingIndex(index);

      setTimeout(() => {
        setData((prevItems) => prevItems.filter((_, i) => i !== index));
        setDeletingIndex(null);
      }, 500); // Adjust the delay as needed
    };

    const renderCell = (key: keyof Factura, value: Factura[keyof Factura]) => {
      switch (key) {
        case 'ID':
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
          <h2 className="font-extrabold text-4xl">Facturas</h2>
          <h3 className="text-slate-600 text-2xl">Manejar las facturas dentro de la aplicación.</h3>
  
          <div className="flex gap-x-3 mt-5">
            <div className="flex items-center bg-slate-200/50 flex-grow px-3 py-2 gap-x-2 rounded-lg">
              <FontAwesomeIcon icon={faSearch} size="lg" className="text-gray-500/50"/>
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none" placeholder="Escribe para filtrar..."/>
            </div>
  
            <Link href={'/facturas/create'} className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NUEVA FACTURA
            </Link>
          </div>
        </div>
  
        <div className="min-w-full h-[100%] overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad total</th>                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <SlideOutRow
                key={index} 
                index={index}
                item={item}
                onDelete={handleDelete}
                isDeleting={index === deletingIndex}
                renderCell={renderCell}
              />
            ))}
            </tbody>
          </table>
        </div>
  
      </div>
    );
};

export default FACTURAS;