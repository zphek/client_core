"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

function Home() {
    const router = useRouter()
    router.push("/login");

    return (<>
        
    </>);
}

export default Home;