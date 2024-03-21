"use client";

import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { send_request } from "@/helpers/sendreq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

interface login{
    username: string
    password: string
}

function Login() {
    const [formData, setFormData] = useState<login>({
        username: "",
        password: ""
    });

    const [error, setError] = useState({
        message: "",
        isError: false
    })

    function HandleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
    
        send_request("post", "http://localhost:3000/auth/login", formData)
        .then(response=>{
            console.log(response);
        }).catch(response=>{
            const {data} = response.response;
            console.dir(data)

            if(data.statusCode > 300){
                setError({
                    message: data.message,
                    isError: true
                })

                setTimeout(()=>{
                    setError({
                       message:"",
                       isError: false 
                    })
                }, 3000)
            }
        })
    }

    function HandleChange(e:ChangeEvent<HTMLInputElement>){
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        setFormData((data)=>({
            ...data, 
            [name]: value
        }));
    }

    return (<div className="flex flex-col items-center justify-center min-h-screen">
        <div className="xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[30%] xl:w-[20%] flex flex-col items-center px-4">   
                <div className="flex justify-center items-center mb-3">
                    <Image src="/images/cart.svg" alt="logo" width={80} height={80}/>
                    <h2 className="text-4xl font-bold text-blue-500">CORE</h2>
                    <h2 className="text-4xl text-blue-500 font-extrabold font-thin">-LOGIN</h2>
                </div>         
            <form className="p-4 flex flex-col gap-y-4 rounded-xl w-[100%] relative" onSubmit={HandleSubmit}>
                <div className={`field ${error.isError && "error"}`}>
                    <input type="text" required id="username" name="username" onChange={HandleChange}/>
                    <label htmlFor="username" title="Username" data-title="Username"></label>
                </div>

                <div className={`field ${error.isError && "error"}`}>
                    <input type="password" required id="password" name="password" onChange={HandleChange}/>
                    <label htmlFor="password" title="Password" data-title="Password"></label>
                </div>

                <section className="flex gap-x-2">
                    <input type="checkbox" name="" id="" className="custom-checkbox-border border-2 border-slate-600"/>
                    <h4 className="text-slate-500 text-base">Remember user</h4>
                </section>

                {error.isError && <>
                    <div className="absolute -bottom-12 w-[100%] bg-red-200 left-0 right-0 px-3 py-2 rounded-lg flex gap-x-2 items-center error-message">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500"/>
                        <h3 className="text-red-500">{error.message}</h3>
                    </div>

                </>}
                
                <button type="submit" className="border-2 border-blue-500 bg-blue-500 py-2 rounded-lg font-sans text-white font-bold text-md hover:text-blue-500 hover:bg-white transition-[400ms] h-10">
                    SIGN IN
                </button>
            </form>
        </div>
        
    </div>);
}

export default Login;