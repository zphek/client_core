'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faRotate, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface clients{
    ID: number,
    client_fullname: string,
    email: string,
    phone_number: string
}

interface form{
    client_fullname: string,
    email: string,
    phone_number: string
}

function UsuariosCreate() {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [clients, setClients] = useState<clients[]>([]);
    const [formData, setFormData] = useState({
        client_fullname: "",
        email: "",
        phone_number: ""
    });

    const [available, setAvailable] = useState(null);

    useEffect(()=>{
        setUrl('/clientes');
      }, [])
    
    function handleChange(e: ChangeEvent<HTMLInputElement> | any){
        const name = e.target.name;
        const value = typeof(formData[name]) == "number" ? parseInt(e.target.value) : e.target.value;

        setFormData((prev)=> ({...prev, [name]: value}))
        
        console.log({ ...formData, [e.target.name]: value });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        send_request('post', 'http://34.229.4.148:3000/clients/create', formData, 12345)
        .then((response)=>{
            console.log(response);
        });
    }   
    
    return (
    <div className="min-h-screen">
        <Link href={'/clientes'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-5xl font-extrabold p-5">Crear Cliente</h2>

        <form onSubmit={handleSubmit} className="p-5 register-smth min-h-[100%]">
            <div>
                <h2 className="text-xl">Nombre del cliente</h2>
                <input type="text" name="client_fullname" id="" onChange={(e)=>{ handleChange(e)}} required/>
            </div>

            <div>
                <h2 className="text-xl">Correo electrónico</h2>
                <input type="text" name="email" id="" onChange={(e)=> handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Número telefónico</h2>
                <input type="text" name="phone_number" id="" onChange={(e)=>handleChange(e)} required/>
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