'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faRotate, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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

    useEffect(()=>{
        setUrl('/facturas');
      }, [])
    
    function handleChange(e: ChangeEvent<HTMLInputElement> | any){
        const name = e.target.name;
        const value = typeof(formData[name]) == "number" ? parseInt(e.target.value) : e.target.value;

        setFormData((prev)=> ({...prev, [name]: value}))
        
        console.log({ ...formData, [e.target.name]: value });
    }

    const notify = (notiType: number) => {
        if(notiType == 1){
            return toast.success("The register was successfully created!",  {
                position: "bottom-right"
            });
        } else {
            return toast.error("The register was not created.",  {
                position: "bottom-right"
            });
        }
    }


    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        send_request('post', 'http://34.229.4.148:3000/invoice/create', formData, 12345)
        .then((response)=>{
            notify(1);
            console.log(response);
        }).catch(err =>{
            notify(2);
        })
    }
    
    return (
    <div className="min-h-screen">
        <Link href={'/facturas'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-5xl font-extrabold p-5">Crear Factura</h2>

        <form onSubmit={handleSubmit} className="p-5 register-smth min-h-[100%]">
            <div>
                <h2 className="text-xl">ID del cliente</h2>
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
                    <option value="0">SIN METODO</option>
                    <option value="1">Tarjeta de credito/debito</option>
                    <option value="2">Efectivo</option>
                    <option value="3">Transaccion</option>
                </select>
            </div>

            <div className="w-[30em] flex gap-x-4">
                <button className="flex-grow bg-blue-500 py-2 text-white rounded-lg flex items-center justify-center gap-x-2 hover:text-blue-500 hover:bg-white border-2 border-blue-500" type="submit">
                    <FontAwesomeIcon icon={faSave}/>
                    CREAR</button>
                <button className="flex-grow bg-red-500 py-2 text-white rounded-lg flex items-center justify-center gap-x-2 hover:text-red-500 hover:bg-white border-2 border-red-500" type="reset">
                    <FontAwesomeIcon icon={faCancel}/>
                    CANCELAR</button>
            </div>

        </form>
    </div>);
}

export default UsuariosCreate;