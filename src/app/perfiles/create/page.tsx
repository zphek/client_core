'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faRotate, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface profiles{
    ID: number,
    profile_role: string,
    role_description: string
}

interface profile_permisions{
    ID: number,
    profile_id: number,
    permission_id: number
}

interface form{
    profile_role: string,
    role_description: string,
    create_permission: boolean,
    read_permission: boolean,
    update_permission: boolean,
    delete_permission: boolean
}

function UsuariosCreate() {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [profiles, setUsers] = useState<profiles[]>([]);
    const [profile_permisions, setProfile] = useState<profile_permisions[]>([]);
    const [formData, setFormData] = useState({
        profile_role: "",
        role_description: "",
        create_permission: false,
        read_permission: false,
        update_permission: false,
        delete_permission: false
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

    function searchRole(e: ChangeEvent<HTMLInputElement>){
        const p = profiles.find(element=> element.profile_role.toLowerCase() == e.target.value.toLowerCase())
        
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

    function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    
    return (
    <div className="min-h-screen">
        <Link href={'/perfiles'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-5xl font-extrabold p-5">Crear Perfil</h2>

        <form onSubmit={handleSubmit} className="p-5 register-smth min-h-[100%]">
            <div>
                <h2 className="text-xl">Nombre del perfil</h2>
                <input type="text" name="profile_role" id="" className={available == null ? " border-2 border-slate-500 outline-none" : available ? "available" : " border-2 border-red-500 outline-none"} onChange={(e)=>{ searchRole(e); handleChange(e) }} required/>
                
                {available == null ? <h3 className="text-slate-500 flex items-center gap-x-2 mt-2">
                Buscando perfil
                <FontAwesomeIcon icon={faCircleNotch} className="fa-spin"/>
                </h3> : available ? <h3 className="text-green-500 flex items-center gap-x-2 mt-2">
                Perfil disponible
                <FontAwesomeIcon icon={faCheckCircle}/>
                </h3> : <h3 className="text-red-500 flex items-center gap-x-2 mt-2">
                Perfil no disponible
                <FontAwesomeIcon icon={faCancel}/>
                </h3>}
            </div>

            <div>
                <h2 className="text-xl">Descripción</h2>
                <input type="text" name="full_name" id="" onChange={(e)=> handleChange(e)} required/>
            </div>

            <div>
                    <h2 className="text-xl">Permisos</h2>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="permisoCrea"
                            checked={formData.create_permission}
                            onChange={handleCheckboxChange}
                            className="absolute"
                        />
                        <span>Permiso de creación.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="permisoLectura"
                            checked={formData.read_permission}
                            onChange={handleCheckboxChange}
                            className="absolute"
                        />
                        <span>Permiso de lectura.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="permisoActualiza"
                            checked={formData.update_permission}
                            onChange={handleCheckboxChange}
                            className="absolute"
                        />
                        <span>Permiso de actualización.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="permisoEliminacion"
                            checked={formData.delete_permission}
                            onChange={handleCheckboxChange}
                            className="absolute"
                        />
                        <span>Permiso de eliminación.</span>
                    </div>
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