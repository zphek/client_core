  'use client'

  import type { NextPage } from "next";
  import styles from "./index.module.css";
  import Link from "next/link";
  import Sidebar from "@/components/Sidebar/Sidebar";
  import SlideOutRow from "@/components/SlideoutRow/SlideOutRow";
  import { usePageStore } from "@/store/actualPageStore";
  import { useEffect, useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faAdd, faPencil, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";

  interface User {
    name: string;
    username: string;
    email: string;
    role: string;
    lastConnection: string;
  }

  const USUARIOS: NextPage = () => {
    const [data, setData] = useState<User[]>([
      { name: 'Bernardo Baez 1', username: 'bernardob', email: 'bernardbaez.beno@gmail.com', role: 'Admin', lastConnection: '3 dias', },
      { name: 'Bernardo Baez 2', username: 'bernardob', email: 'bernardbaez.beno@gmail.com', role: 'Admin', lastConnection: '3 dias', },
      { name: 'Bernardo Baez 3', username: 'bernardob', email: 'bernardbaez.beno@gmail.com', role: 'Admin', lastConnection: '3 dias', },
      { name: 'Bernardo Baez 4', username: 'bernardob', email: 'bernardbaez.beno@gmail.com', role: 'Admin', lastConnection: '3 dias', },
      { name: 'Bernardo Baez 5', username: 'bernardob', email: 'bernardbaez.beno@gmail.com', role: 'Admin', lastConnection: '3 dias', },
      { name: 'Bernardo Baez 6', username: 'bernardob', email: 'bernardbaez.beno@gmail.com', role: 'Admin', lastConnection: '3 dias', },
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

    const renderCell = (key: keyof User, value: User[keyof User]) => {
      switch (key) {
        case 'role':
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
          <h2 className="font-extrabold text-4xl">Usuarios</h2>
          <h3 className="text-slate-600 text-2xl">Manejar usuarios dentro de la aplicación.</h3>

          <div className="flex gap-x-3 mt-5">
            <div className="flex items-center bg-slate-200/50 flex-grow px-3 py-2 gap-x-2 rounded-lg">
              <FontAwesomeIcon icon={faSearch} size="lg" className="text-gray-500/50"/>
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none" placeholder="Escribe para filtrar..."/>
            </div>

            <Link href={'/usuarios/create'}className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NUEVO USUARIO
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last connection</th>
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

  export default USUARIOS;