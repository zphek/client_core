'use client';

import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { usePageStore } from "@/store/actualPageStore";

const PRODUCTOS: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])


    return (
        <div className="flex justify-around w-[100%] bg-blue-500">
        </div>
    );
};

export default PRODUCTOS;