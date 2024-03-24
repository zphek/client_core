'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect } from "react";

const SERVICIOS: NextPage = () => {
    const setUrl = usePageStore((state) => state.changeUrl);

    useEffect(()=>{
      setUrl(window.location.pathname);
    }, [])

    return (
      <div>
        
      </div>
    );
};

export default SERVICIOS;