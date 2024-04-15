'use client'

import { send_request } from "@/helpers/sendreq";
import { usePageStore } from "@/store/actualPageStore";
import { faEye, faEyeSlash, faArrowLeft, faCancel, faChargingStation, faCheck, faCheckCircle, faCircleNotch, faClose, faRotate, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface users{
    ID: number,
    username: string,
    full_name: string,
    user_password: string,
    email: string,
    phone_number: string,
    profile_type: number,
    client_id: number
}

interface profile{
    ID: number,
    profile_role: string
}

interface form{
    username: string,
    full_name: string,
    user_password: string,
    email: string,
    phone_number: string,
    profile_type: number
}

function UsuariosCreate() {
    const setUrl = usePageStore((state) => state.changeUrl);
    const [users, setUsers] = useState<users[]>([]);
    const [profile, setProfile] = useState<profile[]>([]);
    const [formData, setFormData] = useState({
        username: "",
        full_name: "",
        user_password: "",
        email: "",
        phone_number: "",
        profile_type: 0
    });

    const [showPassword, setShowPassword] = useState(false);
    const [available, setAvailable] = useState(null);

    useEffect(()=>{
        setUrl('/usuarios');
        
        send_request('get', 'http://34.229.4.148:3000/users/get', null, 12345)
        .then(({data})=>{
            setUsers(data);
        });

        send_request('get', 'http://34.229.4.148:3000/profiles/get', null, 12345)
        .then(({data})=>{
            setProfile(data);
        });
      }, [])

    function searchUser(e: ChangeEvent<HTMLInputElement>){
        const p = users.find(element=> element.username.toLowerCase() == e.target.value.toLowerCase())
        
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

        send_request("post", "http://34.229.4.148:3000/auth/register", formData, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IklEIjoyLCJ1c2VybmFtZSI6ImJlcm5hcmRvIiwiZnVsbF9uYW1lIjoiQmVybmFyZG8gQmFleiIsInVzZXJfcGFzc3dvcmQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOls0OSw1MCw1MSw1Ml19LCJlbWFpbCI6ImJlcm5hcmRvQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjgwOTQ5NzE4MDMiLCJwcm9maWxlX3R5cGUiOjEsImNsaWVudF9pZCI6MiwiY3JlYXRlZEF0IjoiMjAyNC0wMy0xNFQwMDowMDowMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0wMy0xNFQwMDowMDowMC4wMDBaIn0sInByaXZpbGVnZXMiOlsiQUxMIl0sImlhdCI6MTcxMzIwNzc5NCwiZXhwIjoxNzEzMjE0OTk0fQ.9FPFCJ3KZIlNuQKOMY56IbpOthdVFG1zjwitYC3WDuo")
        .then(response=>{
            console.log(response);
        })
    }

    function togglePassword(){
        setShowPassword((prevState) => !prevState);
    }
    
    return (
    <div className="min-h-screen">
        <Link href={'/usuarios'} className="flex items-center font-bold gap-x-2 text-blue-500 p-5">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h2>VOLVER</h2>
        </Link>

        <h2 className="text-5xl font-extrabold p-5">Crear Usuario</h2>

        <form onSubmit={handleSubmit} className="p-5 register-smth min-h-[100%]">
            <div>
                <h2 className="text-xl">Nombre del usuario</h2>
                <input type="text" name="username" id="" className={available == null ? " border-2 border-slate-500 outline-none" : available ? "available" : " border-2 border-red-500 outline-none"} onChange={(e)=>{ searchUser(e); handleChange(e) }} required/>
                
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
                <h2 className="text-xl">Nombre completo</h2>
                <input type="text" name="full_name" id="" onChange={(e)=> handleChange(e)} required/>
            </div>

            <div>
                <h2>Contraseña de usuario</h2>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="user_password"
                        value={formData.user_password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="relative right-10 top-0 p-2 absolute"
                        onClick={togglePassword}
                    >
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                        />
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-xl">Correo electrónico</h2>
                <input type="text" name="email" id="" onChange={(e)=>handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Número Telefónico</h2>
                <input type="text" name="phone_number" id="" onChange={(e)=>handleChange(e)} required/>
            </div>

            <div>
                <h2 className="text-xl">Rol de usuario</h2>
                <select name="profile_type" id="" onChange={(e)=>handleChange(e)} required>
                    {profile.length == 0 ?
                    <option>NO ROLES</option>
                    : profile.map(cate=> <option key={cate.ID} id={"" + cate.ID} value={cate.ID}>{cate.profile_role}</option> )}
                </select>
            </div>

            <div className="w-[30em] flex gap-x-4">
                <button className="flex-grow bg-blue-500 py-2 text-white rounded-lg flex items-center justify-center gap-x-2 hover:text-blue-500 hover:bg-white border-2 border-blue-500">
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