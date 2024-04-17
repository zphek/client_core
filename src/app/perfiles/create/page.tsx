'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faDeleteLeft, faRotate, faSave, faUpload, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
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

interface Permiso {
    id: number;
    nombre: string;
  }
  
  const permisos: Permiso[] = [
    { id: 0, nombre: 'NINGUNO' },
    { id: 1, nombre: 'ALL' },
    { id: 2, nombre: 'Account_R' },
    { id: 3, nombre: 'Clients' },
    { id: 4, nombre: 'Users' },
    { id: 5, nombre: 'Invoices' },
    { id: 6, nombre: 'Products' },
    { id: 7, nombre: 'Quotes' },
    { id: 8, nombre: 'Services' },
    { id: 9, nombre: 'Profiles' },
  ];

function UsuariosCreate() {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [profiles, setUsers] = useState<profiles[]>([]);
    const [profile_permisions, setProfile] = useState<profile_permisions[]>([]);
    const [formData, setFormData] = useState({
        profile_role: "",
        role_description: "",
        roles: []
    });

    const [available, setAvailable] = useState(null);

    useEffect(()=>{
        setUrl(window.location.pathname);
    }, [])

    useEffect(()=>{
        setUrl('/usuarios');
      }, [])

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

    const [selectedPermisos, setSelectedPermisos] = useState<number[]>([]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = parseInt(event.target.value, 10);
    
        if (selectedPermisos.includes(1) && selectedOptionId !== 1) {
            setSelectedPermisos([1]);
            return; // No permitir agregar más permisos si ya se seleccionó "ALL"
        }

        setSelectedPermisos([...selectedPermisos.filter(id => id !== 1), selectedOptionId]);
      };
    
      const handleRemovePermiso = (permisoId: number) => {
        setSelectedPermisos(selectedPermisos.filter(id => id !== permisoId));
      };
    
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

        console.log(selectedPermisos);
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

            <div className="flex gap-x-10">
                <div>
                    <h2 className="text-xl">Permisos</h2>
                    <select onChange={handleSelectChange}>
                        {permisos.map(permiso => (
                        <option key={permiso.id} value={permiso.id}>{permiso.nombre}</option>
                        ))}
                    
                    </select>
                </div>
                <div>
                    <h2>Permisos selecionados</h2>
                    <div className="flex gap-x-5 w-[40em] overflow-x-auto py-2 px-2">
                    {selectedPermisos.map(permisoId => (
                    <div key={permisoId} className="selected-item bg-slate-100 px-5 py-2 flex gap-x-2 items-center fadeIn">
                        {permisos.find(permiso => permiso.id === permisoId)?.nombre}
                        <FontAwesomeIcon className="text-blue-300 cursor-pointer" icon={faXmarkCircle} onClick={() => handleRemovePermiso(permisoId)}/>
                    </div>
                    ))}
                </div>
                </div>
            </div>
                
            <div className="w-[30em] flex gap-x-4 justify-center">
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