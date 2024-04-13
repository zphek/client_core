'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect, useState } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SlideOutRow from "@/components/SlideoutRow/SlideOutRow";

interface Cotizacion {
  name: string,
  date: string,
  descripcion: string,
  price: string,
  state: string
}

const COTIZACIONES: NextPage = () => {
    const [data, setData] = useState<Cotizacion[]>([
      { name: 'Cotizacion 1', date: '2021-10-10', descripcion: 'Descripcion de la cotizacion 1', price: '$1000.00', state: 'Pendiente' },
      { name: 'Cotizacion 2', date: '2021-10-10', descripcion: 'Descripcion de la cotizacion 2', price: '$1000.00', state: 'Pendiente' },
      { name: 'Cotizacion 3', date: '2021-10-10', descripcion: 'Descripcion de la cotizacion 3', price: '$1000.00', state: 'Pendiente' },
      { name: 'Cotizacion 4', date: '2021-10-10', descripcion: 'Descripcion de la cotizacion 4', price: '$1000.00', state: 'Pendiente' },
      { name: 'Cotizacion 5', date: '2021-10-10', descripcion: 'Descripcion de la cotizacion 5', price: '$1000.00', state: 'Pendiente' },
      { name: 'Cotizacion 6', date: '2021-10-10', descripcion: 'Descripcion de la cotizacion 6', price: '$1000.00', state: 'Pendiente' },
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

    const renderCell = (key: keyof Cotizacion, value: Cotizacion[keyof Cotizacion]) => {
      switch (key) {
        case 'name':
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
          <h2 className="font-extrabold text-4xl">Cotizaciones</h2>
          <h3 className="text-slate-600 text-2xl">Manejar cotizaciones dentro de la aplicación.</h3>
  
          <div className="flex gap-x-3 mt-5">
            <div className="flex items-center bg-slate-200/50 flex-grow px-3 py-2 gap-x-2 rounded-lg">
              <FontAwesomeIcon icon={faSearch} size="lg" className="text-gray-500/50"/>
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none" placeholder="Escribe para filtrar..."/>
            </div>
  
            <Link href={'/cotizaciones/create'} className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NUEVA COTIZACIÓN
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index)=>(
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

export default COTIZACIONES;