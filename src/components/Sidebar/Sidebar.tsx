"use client"
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faBox, faClose, faDashboard, faFileInvoice, faMoneyBill, faPersonShelter, faQuoteLeft, faSignOut, faTable, faTruck, faTruckLoading, faUser, faUsers, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons/faFileInvoiceDollar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";
import { usePageStore } from "@/store/actualPageStore";

interface option{
    name: string,
    icon: FontawesomeObject | any,
    to: string
}

const menuOptions: option[] = [
    { icon: faDashboard, name: "Dashboard", to: "/dashboard"},
    { icon: faUsers, name: "Usuarios", to: "/usuarios" },
    { icon: faUser, name: "Perfiles", to: "/perfiles" },
    { icon: faBox, name: "Productos", to: "/productos" },
    { icon: faUsersLine, name: "Clientes", to: "/clientes" },
    { icon: faTruckLoading, name: "Servicios", to: "/servicios" },
    { icon: faMoneyBill, name: "Cotizaciones", to: "/cotizaciones" },
    { icon: faFileInvoice, name: "Facturas", to: "/facturas" },
    { icon: faFileInvoiceDollar, name: "Cuentas por cobrar", to: "/cuentas-a-cobrar" }
]

function Sidebar() {
    let [hide, setHide] = useState(false);
    const url = usePageStore((state) => state.url);
    
    return (
        <div className={`py-5 flex flex-col min-h-screen border-r-2 border-slate-300/20 m-0 ${hide ? 'hided_sidebar' : 'showed_sidebar w-[300px] px-12'}`}>
            <div className={`flex items-center overflow-hidden ${hide && 'hidden'}`}>
                <Image src={"/images/cart.svg"} width={70} height={70} alt="CORElogo"/>
                <h2 className="text-blue-500 font-extrabold text-3xl">CORE</h2>
            </div>

            {/* <div className="overflow-hidden">
                <h1 className={`text-5xl font-extrabold mt-5 ${hide && 'hidden'}`}>Registros</h1>
            </div> */}
           
            <div className={`options flex flex-col mt-6 gap-y-2 overflow-x-hidden ${hide && 'hidden'}`}>
                {menuOptions.map((option: option)=>(
                    <Link href={option.to} className={"flex items-center px-5 py-3 gap-x-2 option hover:bg-blue-500 rounded-xl transition-[200ms] " + (option.to == url && "active-option")} key={option.name}>
                        <FontAwesomeIcon icon={option.icon} size="xl" color="#2677FF" className="text-black"/>
                        <h3 className="text-base">{option.name}</h3>
                    </Link>
                ))}
            </div>

            <button className={"bg-blue-800 rounded-lg py-2 px-5 text-white font-bold mt-20 text-lg hover:bg-white hover:text-blue-500 hover:ring-2 hover:ring-blue-500 transition-all " + (hide && "hidden")}>
                <FontAwesomeIcon icon={faSignOut}/> CERRAR SESION
            </button>

            {/* <button className={"flex items-center justify-center rounded-full text-white bg-blue-700 p-2 absolute top-4 " + (hide ? "rotate-180 transition-all -right-12" : " -right-5")} onClick={()=>{ setHide(!hide) }}>
                <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
            </button> */}
        </div>
    );
}

export default Sidebar;
