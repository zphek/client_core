"use client";

import { FormEvent, FormEventHandler } from "react";

function HandleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();

    console.log(e);
}

function Login() {
    return (<div className="flex flex-col items-center justify-center min-h-screen">
        <form className="md:w-[30%] p-2 flex flex-col gap-y-5" onSubmit={HandleSubmit}>
            <img src="" alt="" />
            <input type="text" name="" id="" placeholder="Username" className="py-3 px-2 outline-none border-b-2 border-slate-200"/>
            <input type="text" name="" id="" placeholder="Password" className="py-3 px-2 outline-none border-b-2 border-slate-200"/>
            <button type="submit" className="bg-blue-500 py-3 rounded-lg font-sans text-white font-bold text-lg hover:text-blue-500 hover:bg-white hover:border-2 hover:border-blue-500 transition-[400ms]">
                SIGN IN
            </button>

            <h4 className="text-center text-slate-500">Forgot password?</h4>
        </form>
    </div>);
}

export default Login;