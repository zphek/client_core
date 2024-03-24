'use client'

import { usePageStore } from "@/store/actualPageStore";
import type { NextPage } from "next";
import { useEffect } from "react";

const CUENTASACOBRAR: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])

    return (
      <div className="flex w-[100%] bg-blue-500">
      
      </div>
    );
};

export default CUENTASACOBRAR;