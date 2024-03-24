'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect } from "react";

const COTIZACIONES: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])

    return (
      <div className="flex w-[100%] bg-blue-500">
      </div>
    );
};

export default COTIZACIONES;