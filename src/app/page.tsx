"use client";

import Link from "next/link";

function Home() {

    return (<>
        <h2 className="mb-5">Buenass</h2>

        <Link href="/login" className="px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition-[500ms]">IR A LOGIN</Link>
    </>);
}

export default Home;