'use client';

import type { NextComponentType, NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { usePageStore } from "@/store/actualPageStore";
import { faSearch, faAdd, faTrash, faPencil, faCheckCircle, faX, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send_request } from "@/helpers/sendreq";

interface product{
  ID: number,
  product_name: string,
  stock: number,
  price: number,
  isVisible: number,
  category_name: string
}


const PRODUCTOS: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [products, setProducts] = useState<product[]>([]);

    useEffect(()=>{
      setUrl(window.location.pathname);

      send_request('get', 'http://localhost:3000/products/get', null, 12345)
      .then(({data})=>{
        setProducts(data);
      })
    }, [])


    return (
      <div className="flex flex-col justif-around w-[100%] bg-slate-200/60 max-h-screen">
        <div className="h-10 bg-white">
  
        </div>
        <div className="bg-white p-6">
          <h2 className="font-extrabold text-4xl">Productos</h2>
          <h3 className="text-slate-600 text-2xl">Manejar productos dentro de la aplicación.</h3>
  
          <div className="flex gap-x-3 mt-5">
            <div className="flex items-center bg-slate-200/50 flex-grow px-3 py-2 gap-x-2 rounded-lg">
              <FontAwesomeIcon icon={faSearch} size="lg" className="text-gray-500/50"/>
              <input type="text" name="" id="" className="flex-grow bg-transparent outline-none" placeholder="Escribe para filtrar..."/>
            </div>
  
            <Link href={'/productos/create'} className="flex items-center justify-center text-white bg-blue-500 px-5 py-2 rounded-lg gap-x-2">
              <FontAwesomeIcon icon={faAdd}/>
              NUEVO PRODUCTO
            </Link>
          </div>
        </div>
  
        <div className="min-w-full h-screen overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NOMBRE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CANTIDAD</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRECIO</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIVO</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CATEGORIA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.length > 0 ? products.map(products=>(
                <tr className={`${products.isVisible == 0 && 'bg-red-100'} hover:bg-slate-100 transition-[400ms]`}>
                  <td className="px-2 py-4 whitespace-nowrap">#{products.ID}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{products.product_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><input type="number" name="" id="" defaultValue={products.stock} min={products.stock} contentEditable={false} onInput={(e) => {
                    if (parseInt(e.currentTarget.value) < products.stock) {
                      e.currentTarget.value = products.stock.toString();
                    }
                  }}/></td>
                  <td className="px-6 py-4 whitespace-nowrap">${products.price}.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">{products.isVisible == 1 ? <FontAwesomeIcon icon={faCheckCircle} className="text-green-500"/> : <FontAwesomeIcon icon={faX} className="text-red-500"/>}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{products.category_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                    <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-red-500 transition-all "/>
                    <FontAwesomeIcon icon={faPencil} size="lg" className="hover:text-blue-500 transition-all"/>
                  </td>
              </tr>
              )) : <></>}
  
            </tbody>
          </table>
        </div>
  
      </div>
    );
};

export default PRODUCTOS;