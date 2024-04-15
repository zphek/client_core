'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect, useState } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send_request } from "@/helpers/sendreq";
import Link from "next/link";
import SlideOutRow from "@/components/SlideoutRow/SlideOutRow";

interface profile{
  ID: number,
  profile_role: string,
  role_description: string
}

const PERFILES: NextPage = () => {
    const [profiles, setProfiles] = useState<profile[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState<{ [index: number]: boolean }>({});
    useEffect(()=>{
      setUrl(window.location.pathname);

      send_request('get', 'http://34.229.4.148:3000/profiles/get', null, 12345)
      .then(({data})=>{
        setProfiles(data);
      })
    }, [])

    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])

    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

    const handleDelete = (index: number) => {
      setDeletingIndex(index);

      setTimeout(() => {
        setProfiles((prevItems) => prevItems.filter((_, i) => i !== index));
        setDeletingIndex(null);
      }, 500); // Adjust the delay as needed
    };

    const renderCell = (key: keyof profile, value: profile[keyof profile]) => {
      switch (key) {
        case 'profile_role':
          return (
            <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
              {value}
            </div>
          );
        case 'role_description':
          // Verifica si value es una cadena vacía o falsy
          if (!value) {
            // Si es así, muestra el texto predeterminado
            return <span>Descripción no disponible</span>;
          }
          // Si value tiene un valor, muéstralo
          return <>{value}</>;
        default:
          return <>{value}</>;
      }
    };

    const getEditRoute = (item: profile) => {
      setSelectedUserId(item.ID);
      setIsEditModalOpen(true);
    };


    return (
      <div className="flex flex-col justif-around w-[100%] bg-slate-200/60 max-h-screen">
        <div className="h-10 bg-white">
  
        </div>
        <div className="bg-white p-6">
          <h2 className="font-extrabold text-4xl">Perfiles</h2>
          <h3 className="text-slate-600 text-2xl">Manejar perfiles dentro de la aplicación.</h3>
  
          <div className="flex gap-x-3 mt-5">
            <div className="flex items-center bg-slate-200/50 flex-grow px-3 py-2 gap-x-2 rounded-lg">
              <FontAwesomeIcon icon={faSearch} size="lg" className="text-gray-500/50"/>
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none" placeholder="Escribe para filtrar..."/>
            </div>
  
            <Link href={'/perfiles/create'}className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NUEVO PERFIL
            </Link>
          </div>
        </div>
  
        <div className="min-w-full h-screen overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NOMBRE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESCRIPCION</th> 
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {profiles.length > 0 ? profiles.map((item, index) => (
                <tr key={index} className={`'bg-red-100'} hover:bg-slate-100 transition-[400ms] ${isDeleting[index] ? 'translate-x-full' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">{renderCell('profile_role', item.profile_role)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{renderCell('role_description', item.role_description)}</td>
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
  
      </div>
    );
};

export default PERFILES;