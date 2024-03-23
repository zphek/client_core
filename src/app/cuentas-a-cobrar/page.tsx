import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';
import Sidebar from "@/components/Sidebar/Sidebar";

const CUENTASACOBRAR: NextPage = () => {
    return (
      <div className="flex">
        <Sidebar activeUrl={'cuentas-a-cobrar'}/>  
        <div className="w-[100%] bg-blue-500">
          <h2>BUENSAS</h2>
        </div>
      </div>
    );
};

export default CUENTASACOBRAR;