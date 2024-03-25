'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

function ProductosCreate() {
    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
        setUrl('/productos');
        
        send_request('get', 'http://localhost:3000/products/get', null, 12345)
        .then(({data})=>{
         
        })
      }, [])
      
    return (<div className="max-h-screen">
        <Link href={'/productos'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-3xl font-extrabold p-5">AGREGAR PRODUCTO</h2>

        <section className="p-5">
            <div>
                <h2 className="text-xl">Nombre del producto</h2>
                <input type="text" name="" id="" />
            </div>

            <div>
                <h2 className="text-xl">Cantidad en stock</h2>
                <input type="text" name="" id="" />
            </div>

            <div>
                <h2 className="text-xl">Tipo de producto</h2>
                <select name="" id="">
                    <option>Buenas</option>
                </select>
            </div>

            <div>
                <h2 className="text-xl">Precio del producto</h2>
                <input type="text" name="" id="" />
            </div>

        </section>
    </div>);
}

export default ProductosCreate;