'use client'

import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { faBox, faDashboard, faFileInvoice, faFileInvoiceDollar, faGear, faHome, faHomeAlt, faLineChart, faMoneyBill, faSignOut, faTruckLoading, faUser, faUsers, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

interface option{
    name: string,
    icon: FontawesomeObject | any,
    to: string
}

const menuOptions: option[] = [
    { icon: faHome, name: "Dashboard", to: "/dashboard"},
    { icon: faUsers, name: "Usuarios", to: "/usuarios" },
    { icon: faUser, name: "Perfiles", to: "/perfiles" },
    { icon: faBox, name: "Productos", to: "/productos" },
    { icon: faUsersLine, name: "Clientes", to: "/clientes" },
    { icon: faTruckLoading, name: "Servicios", to: "/servicios" },
    { icon: faMoneyBill, name: "Cotizaciones", to: "/cotizaciones" },
    { icon: faFileInvoice, name: "Facturas", to: "/facturas" },
    { icon: faFileInvoiceDollar, name: "Cuentas por cobrar", to: "/cuentas-a-cobrar" }
]

const Sidebar2 = () => {
    return (<div className="py-5 px-2 flex flex-col justify-center justify-between min-h-screen bg-white">
        
        <div className="flex flex-col justify-between h-[60%]">
            <Image src={"/images/cart.svg"} width={50} height={50} alt="CORElogo"/>

            <div className="menu-options flex flex-col items-center justify-center gap-y-2">
                {menuOptions.map((option)=>(
                    <Link href={option.to} className="option flex gap-x-2">
                        <FontAwesomeIcon icon={option.icon} size="xl"/>
                        <h2 className="font-bold hidden">{option.name}</h2>
                    </Link>
                ))}
            </div>
        </div>

        <div className="user-options flex flex-col gap-y-4 items-center justify-center">
            <FontAwesomeIcon icon={faSignOut} size="xl"/>

            <FontAwesomeIcon icon={faGear} size="xl"/>

            <div className="w-10 h-10 rounded-full bg-blue-950">

            </div>
        </div>
    </div>);
}
 
export default Sidebar2;