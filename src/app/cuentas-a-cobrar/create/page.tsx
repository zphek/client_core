'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faRotate, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface accounts_receivable{
    account_id: number,
    invoice_id: number,
    amount: number,
    due_date: Date,
    status: number
}

interface form{
    invoice_id: number,
    amount: number,
    due_date: Date,
    status: string
}

function UsuariosCreate() {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [accounts_receivable, setInvoices] = useState<accounts_receivable[]>([]);
    const [formData, setFormData] = useState({
        invoice_id: 0,
        amount: 0,
        due_date: new Date(),
        status: ""
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
        <Link href={'/cuentas-a-cobrar'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-5xl font-extrabold p-5">Crear Cuenta a Cobrar</h2>

        <form onSubmit={handleSubmit} className="p-5 register-smth min-h-[100%]">
            <div>
                <h2 className="text-xl">ID de la factura</h2>
                <input type="text" name="invoice_id" id="" onChange={(e)=>{ handleChange(e) }} required/>
            </div>

            
            <div>
                <h2 className="text-xl">Precio total</h2>
                <input type="number" name="amount" id="" min={0} defaultValue={1} onChange={(e)=>handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Fecha de la factura</h2>
                <input type="date" name="due_date" id="" onChange={(e)=> handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Estado</h2>
                <select name="status" id="" onChange={(e)=>handleChange(e)} required>
                    {status.length == 0 ?
                    <option>NO MÉTODOS DE PAGO</option>
                    :status.map(cate=> <option key={cate.ID} id={"" + cate.ID} value={cate.ID}>{cate.category_name}</option> )}
                </select>
            </div>

            <div className="w-[30em] flex gap-x-4">
                <button className="flex-grow bg-blue-500 py-2 text-white rounded-lg flex items-center justify-center gap-x-2 hover:text-blue-500 hover:bg-white border-2 border-blue-500">
                    <FontAwesomeIcon icon={faSave}/>
                    CREAR</button>
                <button className="flex-grow bg-red-500 py-2 text-white rounded-lg flex items-center justify-center gap-x-2 hover:text-red-500 hover:bg-white border-2 border-red-500">
                    <FontAwesomeIcon icon={faCancel}/>
                    CANCELAR</button>
            </div>
        </form>
    </div>);
}

export default UsuariosCreate;