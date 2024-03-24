'use client'

import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from "next/link";
import Sidebar from "@/components/Sidebar/Sidebar";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect } from "react";

const USUARIOS: NextPage = () => {
  const setUrl = usePageStore((state) => state.changeUrl);

  useEffect(()=>{
    setUrl(window.location.pathname);
  }, [])

  return (
    <div className="flex justif-around">
        <div className=" bg-blue-500 w-[100%]">
        </div>
    </div>
  );
};

export default USUARIOS;