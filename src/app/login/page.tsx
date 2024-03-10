"use client";

import { FormEvent, FormEventHandler } from "react";
import Image from "next/image";

function HandleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();

    console.log(e);
}

function Login() {
    return (<div className="flex flex-col items-center justify-center min-h-screen">
        <div className="xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[30%] xl:w-[20%] flex flex-col items-center">   
                <div className="flex justify-center items-center mb-3">
                    <Image src="/images/cart.svg" alt="logo" width={80} height={80}/>
                    <h2 className="text-4xl font-bold text-blue-500">CORE</h2>
                    <h2 className="text-4xl text-blue-500 font-extrabold font-thin">-LOGIN</h2>
                </div>         
            <form className="p-4 flex flex-col gap-y-4 rounded-xl w-[100%]" onSubmit={HandleSubmit}>
                <div className="field">
                    <input type="text" required id="username"/>
                    <label htmlFor="username" title="Username" data-title="Username"></label>
                </div>

                <div className="field">
                    <input type="text" required id="password" className="border-2 border"/>
                    <label htmlFor="password" title="Password" data-title="Password"></label>
                </div>

                <section className="flex gap-x-2">
                    <input type="checkbox" name="" id="" className="custom-checkbox-border border-2 border-slate-600"/>
                    <h4 className="text-slate-500 text-base">Remember user</h4>
                </section>

                <button type="submit" className="border-2 border-blue-500 bg-blue-500 py-2 rounded-lg font-sans text-white font-bold text-md hover:text-blue-500 hover:bg-white transition-[400ms] h-10">
                    SIGN IN
                </button>
            </form>
        </div>
        
    </div>);
}

export default Login;