'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect } from "react";

const FACTURAS: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])

    return (
      <div className="flex bg-blue-500 w-[100%]">
        
      </div>
    );
};

export default FACTURAS;