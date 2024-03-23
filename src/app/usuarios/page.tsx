'use client'

import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from "next/link";
import Sidebar from "@/components/Sidebar/Sidebar";

const USUARIOS: NextPage = () => {
  return (
    <div className="flex justif-around">
        <div className="flex flex-col">
          <Sidebar activeUrl={'usuarios'}/>  
        </div>
        <div className=" bg-blue-500 w-[100%]">
        </div>
    </div>
  );
};

export default USUARIOS;