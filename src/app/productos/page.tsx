'use client';

import type { NextComponentType, NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { usePageStore } from "@/store/actualPageStore";
import { faSearch, faAdd, faTrash, faPencil, faCheckCircle, faX, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send_request } from "@/helpers/sendreq"; 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    const [isDeleting, setIsDeleting] = useState<{ [index: number]: boolean }>({});
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const router = useRouter();

    const notify = (notiType: number) => {
      if(notiType == 1){
          return toast.success("The register was successfully deleted!",  {
              position: "bottom-right"
          });
      } else {
          return toast.error("The register was not deleted.",  {
              position: "bottom-right"
          });
      }};

    useEffect(()=>{
      setUrl(window.location.pathname);

      send_request('get', 'http://34.229.4.148:3000/products/get', null, 12345)
      .then(({data})=>{
        setProducts(data);
      })
    }, [])

    

    const handleDelete = async(index: number) => {
      setIsDeleting((prevState) => ({ ...prevState, [index]: true }));
      // Perform delete operation here

      send_request('delete', "http://34.229.4.148:3000/products/delete/"+ index, null, 12345)
      .then(()=>{
        notify(1)
      })
      .catch(err=>{
        notify(2)
      })

      setTimeout(() => {
        setIsDeleting((prevState) => ({ ...prevState, [index]: false }));
      }, 500); // Reset the isDeleting state after 500ms (adjust as needed)
      setProducts(prevProducts => prevProducts.filter((_, i) => i !== index));

      const productToUpdate = products[index];
    const updatedProduct = { ...productToUpdate, isVisible: 0 };

      try {
        await send_request('put', 'http://34.229.4.148:3000/products/update', updatedProduct, 12345);
        setProducts(prevProducts =>
          prevProducts.map((product, i) =>
            i === index ? { ...product, isVisible: 0 } : product
          )
        );
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
      }
    };

  const getEditRoute = (item: product) => {
    setSelectedProductId(item.ID);
    setIsEditModalOpen(true);
  };

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
              {products.length > 0 ? products.map((product, index) => (
                <tr key={product.ID} className={`${product.isVisible === 0 && 'bg-red-100'} hover:bg-slate-100 transition-[400ms] ${isDeleting[index] ? 'translate-x-full' : ''}`}>
                  <td className="px-2 py-4 whitespace-nowrap">#{product.ID}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.product_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      name=""
                      id=""
                      defaultValue={product.stock}
                      min={product.stock}
                      contentEditable={false}
                      onInput={(e) => {
                        if (parseInt(e.currentTarget.value) < product.stock) {
                          e.currentTarget.value = product.stock.toString();
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">${product.price}.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.isVisible === 1 ? (
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    ) : (
                      <FontAwesomeIcon icon={faX} className="text-red-500" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.category_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      className="hover:text-red-500 transition-all cursor-pointer"
                      onClick={() => handleDelete(index)}
                    />
                    <button onClick={() => getEditRoute(product)}>
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

export default PRODUCTOS;