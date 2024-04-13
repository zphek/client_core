'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faRotate, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface invoices{
    ID: number,
    client_id: number,
    invoice_date: Date,
    total_amount: number,
    payment_method: number
}

interface form{
    client_name: string,
    invoice_date: Date,
    total_amount: number,
    payment_method: string
}

function UsuariosCreate() {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [invoices, setInvoices] = useState<invoices[]>([]);
    const [formData, setFormData] = useState({
        client_name: "",
        invoice_date: new Date(),
        total_amount: 0,
        payment_method: ""
    });

    const [available, setAvailable] = useState(null);

    /*useEffect(()=>{
        setUrl('/usuarios');
        
        send_request('get', 'http://localhost:3000/products/get', null, 12345)
        .then(({data})=>{
            setUsers(data);
        });

        send_request('get', 'http://localhost:3000/category/get', null, 12345)
        .then(({data})=>{
            setProfile(data);
        });
      }, [])*/
    
    function handleChange(e: ChangeEvent<HTMLInputElement> | any){
        const name = e.target.name;
        const value = typeof(formData[name]) == "number" ? parseInt(e.target.value) : e.target.value;

        setFormData((prev)=> ({...prev, [name]: value}))
        
        console.log({ ...formData, [e.target.name]: value });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    
    return (
    <div className="min-h-screen">
        <Link href={'/facturas'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-5xl font-extrabold p-5">Actualizar Factura</h2>

        <form onSubmit={handleSubmit} className="p-5 register-smth min-h-[100%]">
            <div>
                <h2 className="text-xl">Nombre del cliente</h2>
                <input type="text" name="client_name" id="" onChange={(e)=>{ handleChange(e) }} required/>
            </div>

            <div>
                <h2 className="text-xl">Fecha de la factura</h2>
                <input type="date" name="invoice_date" id="" onChange={(e)=> handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Precio total</h2>
                <input type="number" name="total_amount" id="" min={0} defaultValue={1} onChange={(e)=>handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Método de pago</h2>
                <select name="payment_method" id="" onChange={(e)=>handleChange(e)} required>
                    {status.length == 0 ?
                    <option>NO MÉTODOS DE PAGO</option>
                    :status.map(cate=> <option key={cate.ID} id={"" + cate.ID} value={cate.ID}>{cate.category_name}</option> )}
                </select>
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

export default UsuariosCreate;