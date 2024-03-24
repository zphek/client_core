'use client'

import type { NextPage } from "next";
import { usePageStore } from "@/store/actualPageStore";
import { useEffect } from "react";

const PERFILES: NextPage = () => {
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

export default PERFILES;