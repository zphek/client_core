"use client"
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faBox, faFileInvoice, faMoneyBill, faPersonShelter, faQuoteLeft, faTruck, faTruckLoading, faUser, faUsers, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons/faFileInvoiceDollar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons/faArrowLeftRotate";
import { useState } from "react";

interface option{
    name: string,
    icon: FontawesomeObject | any,
    to: string
}

const menuOptions: option[] = [
    { icon: faUsers, name: "Usuarios", to: "/usuarios" },
    { icon: faUser, name: "Perfiles", to: "/perfiles" },
    { icon: faBox, name: "Productos", to: "/productos" },
    { icon: faUsersLine, name: "Clientes", to: "/clientes" },
    { icon: faTruckLoading, name: "Servicios", to: "/servicios" },
    { icon: faMoneyBill, name: "Cotizaciones", to: "/cotizaciones" },
    { icon: faFileInvoice, name: "Facturas", to: "/facturas" },
    { icon: faFileInvoiceDollar, name: "Cuentas por cobrar", to: "/cuentas-a-cobrar" }
]

function Sidebar({ activeUrl }:any) {
    let [hide, setHide] = useState(false);

    
    let url = "/" + activeUrl;

    console.log(url)
    
    return (
        <div className={`py-5 px-10 flex flex-col min-h-screen border-r-2 border-slate-300/20 m-0 min-w-[25%] ${hide ? 'hided_sidebar' : 'showed_sidebar'}`}>
            <div className={`flex items-center overflow-hidden ${hide && 'hidden'}`}>
                <Image src={"/images/cart.svg"} width={70} height={70} alt="CORElogo"/>
                <h2 className="text-blue-500 font-extrabold text-3xl">CORE</h2>
            </div>

            <div className="overflow-hidden">
                <h1 className={`text-5xl font-extrabold mt-5 ${hide && 'hidden'}`}>Registros</h1>
            </div>
           
            <div className={`options flex flex-col mt-6 gap-y-2 overflow-x-hidden ${hide && 'hidden'}`}>
                {menuOptions.map((option: option)=>(
                    <Link href={option.to} className={"flex items-center px-5 py-3 gap-x-2 option hover:bg-blue-500 rounded-xl transition-[200ms] " + (option.to == url && "active-option")} key={option.name}>
                        <FontAwesomeIcon icon={option.icon} size="xl" color="#2677FF" className="text-black"/>
                        <h3 className="text-base">{option.name}</h3>
                    </Link>
                ))}
            </div>

            <button className={"flex items-center justify-center rounded-full text-white bg-blue-700 p-2 absolute -right-5 top-3 " + (hide && " rotate-180 transition-all -right-14")} onClick={()=>{ setHide(!hide) }}>
                <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
            </button>
        </div>
    );
}

export default Sidebar;
