'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect, useState } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send_request } from "@/helpers/sendreq";
import Link from "next/link";

interface profile{
  ID: number,
  profile_role: string,
  role_description: string,
  createdAt: string
}

const PERFILES: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [profiles, setProfiles] = useState<profile[]>([]);

    useEffect(()=>{ 
      setUrl(window.location.pathname);

      send_request('get', 'http://localhost:3000/profiles/get', null, 12345)
      .then(({data}) =>{
        console.log(data)
        setProfiles(data);
      });
    }, [])

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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NOMBRE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESCRIPTION</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FECHA DE CREACION</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            
            {profiles.length > 0 ? profiles.map(profile=>(
              <tr>
                  <td className="px-6 py-4 whitespace-nowrap">{profile.ID}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{profile.profile_role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{profile.role_description || "..."}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{profile.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                    <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                    <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                  </td>
              </tr>
            )) : (<h2></h2>)}
            </tbody>
          </table>
        </div>
  
      </div>
    );
};

export default PERFILES;