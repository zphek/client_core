'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect } from "react";
import { faSearch, faAdd, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CLIENTES: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])

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
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none"/>
            </div>
  
            <button className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NEW USER
            </button>
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
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
  
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bernardo Baez</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardob</td>
                <td className="px-6 py-4 whitespace-nowrap">bernardbaez.beno@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
                      Admin  
                    </div>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap">3 dias</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                  <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                  <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
      </div>
    );
};

export default CLIENTES;