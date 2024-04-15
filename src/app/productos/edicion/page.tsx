'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faRotate, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface product{
    ID: number,
    product_name: string,
    stock: number,
    price: number,
    isVisible: number,
    category_name: string
}

interface category{
    ID: number,
    category_name: string
}

interface form{
    product_name: string,
    stock: number,
    category_id: number,
    price: string
    File: string,
    url_image: string
}

function EditarProductos() {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [products, setProducts] = useState<product[]>([]);
    const [category, setCategory] = useState<category[]>([]);
    const [formData, setFormData] = useState({
        product_name: "",
        stock: 0,
        category_id: 0,
        price: 0,
        File: "",
        url_image: ""
    });

    const [available, setAvailable] = useState(null);
    let inputFile = useRef(null);

    useEffect(()=>{
        setUrl('/productos');
        
        send_request('get', 'http://localhost:3000/products/get', null, 12345)
        .then(({data})=>{
            setProducts(data);
        });

        send_request('get', 'http://localhost:3000/category/get', null, 12345)
        .then(({data})=>{
            setCategory(data);
        });
      }, [])

    function searchProduct(e: ChangeEvent<HTMLInputElement>){
        const p = products.find(element=> element.product_name.toLowerCase() == e.target.value.toLowerCase())
        
        if(e.target.value.length == 0){
            setAvailable(null);
        }
        
        if(p){
            setAvailable(false);
        } else {
            setAvailable(true);
        }
    }
    
    function handleChange(e: ChangeEvent<HTMLInputElement> | any){
        const name = e.target.name;
        const value = typeof(formData[name]) == "number" ? parseInt(e.target.value) : e.target.value;

        setFormData((prev)=> ({...prev, [name]: value}))
        
        console.log({ ...formData, [e.target.name]: value });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

    }
    
    return (<div className="min-h-screen">
        <Link href={'/productos'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-5xl font-extrabold p-5">Actualizar Producto</h2>

        <form onSubmit={handleSubmit} className="p-5 register-smth min-h-[100%]">
            <div>
                <h2 className="text-xl">Nombre del producto</h2>
                <input type="text" name="product_name" id=""className={available == null ? " border-2 border-slate-500 outline-none" : available ? "available" : " border-2 border-red-500 outline-none"} onChange={(e)=>{ searchProduct(e); handleChange(e) }} required/>
                
                {available == null ? <h3 className="text-slate-500 flex items-center gap-x-2 mt-2">
                Buscando nombre
                <FontAwesomeIcon icon={faCircleNotch} className="fa-spin"/>
                </h3> : available ? <h3 className="text-green-500 flex items-center gap-x-2 mt-2">
                Nombre disponible
                <FontAwesomeIcon icon={faCheckCircle}/>
                </h3> : <h3 className="text-red-500 flex items-center gap-x-2 mt-2">
                Nombre no disponible
                <FontAwesomeIcon icon={faCancel}/>
                </h3>}
            </div>

            <div>
                <h2 className="text-xl">Cantidad en stock</h2>
                <input type="number" name="stock" id="" min={1} defaultValue={1} onChange={(e)=> handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Tipo de producto</h2>
                <select name="category_id" id="" onChange={(e)=>handleChange(e)} required>
                    {category.length == 0 ?
                    <option>NO CATEGORIAS</option>
                    :category.map(cate=> <option key={cate.ID} id={"" + cate.ID} value={cate.ID}>{cate.category_name}</option> )}
                </select>
            </div>

            <div>
                <h2 className="text-xl">Precio del producto</h2>
                <input type="number" name="price" id="" min={0} defaultValue={1} onChange={(e)=>handleChange(e)} required/>
            </div>

            <input type="text" value="" name="url_image" className="hidden"/>

            <div>
                <input type="File" id="miInputDeArchivo" className="hidden" name="File" onChange={(e)=>handleChange(e)} ref={inputFile} required/>
                <button type="submit" className="px-12 text-white rounded-lg py-2 bg-violet-500 font-bold flex gap-x-2 items-center justify-center w-[30em] hover:text-violet-500 hover:bg-white transition-all border-2 border-violet-500" onClick={()=>{
                    if(inputFile.current){
                        inputFile.current.click();
                    }
                }}>
                    <FontAwesomeIcon icon={faUpload}/>
                    ACTUALIZAR FOTO</button>
            </div>

            <div className="w-[30em] flex gap-x-4">
                <button className="flex-grow bg-blue-500 py-2 text-white rounded-lg flex items-center justify-center gap-x-2 hover:text-blue-500 hover:bg-white border-2 border-blue-500">
                    <FontAwesomeIcon icon={faSave}/>
                    MODIFICAR</button>
                <button className="flex-grow bg-red-500 py-2 text-white rounded-lg flex items-center justify-center gap-x-2 hover:text-red-500 hover:bg-white border-2 border-red-500">
                    <FontAwesomeIcon icon={faCancel}/>
                    CANCELAR</button>
            </div>

        </form>
    </div>);
}

export default EditarProductos;