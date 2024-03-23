'use client';

import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

const PRODUCTOS: NextPage = () => {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(()=>{
      let router = window.location.href; // Obtener el router

      setCurrentUrl(router);
    }, [])

    return (
      <div className="flex justif-around">
        <div className="flex flex-col">
          <Sidebar activeUrl={currentUrl}/>  
        </div>
        <div className=" bg-blue-500 w-[100%]">
        </div>
      </div>
    );
};

export default PRODUCTOS;