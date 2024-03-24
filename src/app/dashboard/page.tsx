'use client'

import Order from "@/components/order";
import { usePageStore } from "@/store/actualPageStore";
import { faBox, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const ordenes = [
  {
    id: 1,
    producto: "Camiseta Polo Ralph Lauren",
    usuario: "bernardob",
    total: "$20.00",
    estado: "En camino"
  },
  {
    id: 2,
    producto: "Zapatos Nike Air Max",
    usuario: "usuario2",
    total: "$35.00",
    estado: "Entregado"
  },
  {
    id: 3,
    producto: "Jeans Levi's 501",
    usuario: "usuario3",
    total: "$15.00",
    estado: "En proceso"
  },
  {
    id: 4,
    producto: "Vestido Tommy Hilfiger",
    usuario: "usuario4",
    total: "$50.00",
    estado: "En camino"
  },
  {
    id: 5,
    producto: "Sudadera Adidas Originals",
    usuario: "usuario5",
    total: "$45.00",
    estado: "Entregado"
  },
  {
    id: 6,
    producto: "Chaqueta The North Face",
    usuario: "usuario6",
    total: "$60.00",
    estado: "En camino"
  },
  {
    id: 7,
    producto: "Gorra New Era",
    usuario: "usuario7",
    total: "$25.00",
    estado: "Entregado"
  },
  {
    id: 8,
    producto: "Pantalones Puma",
    usuario: "usuario8",
    total: "$40.00",
    estado: "En camino"
  },
  {
    id: 9,
    producto: "Sujetador Calvin Klein",
    usuario: "usuario9",
    total: "$30.00",
    estado: "En camino"
  },
  {
    id: 10,
    producto: "Bufanda Burberry",
    usuario: "usuario10",
    total: "$55.00",
    estado: "Entregado"
  },
  {
    id: 11,
    producto: "Abrigo Columbia",
    usuario: "usuario11",
    total: "$65.00",
    estado: "En camino"
  },
  {
    id: 12,
    producto: "Falda Versace",
    usuario: "usuario12",
    total: "$75.00",
    estado: "Entregado"
  },
  {
    id: 13,
    producto: "Chaleco Lacoste",
    usuario: "usuario13",
    total: "$70.00",
    estado: "En proceso"
  },
  {
    id: 14,
    producto: "Bañador Speedo",
    usuario: "usuario14",
    total: "$80.00",
    estado: "En camino"
  },
  {
    id: 15,
    producto: "Jersey Tommy Bahama",
    usuario: "usuario15",
    total: "$90.00",
    estado: "Entregado"
  },
  {
    id: 16,
    producto: "Pijama Victoria's Secret",
    usuario: "usuario16",
    total: "$100.00",
    estado: "En camino"
  },
  {
    id: 17,
    producto: "Chándal Reebok",
    usuario: "usuario17",
    total: "$110.00",
    estado: "Entregado"
  },
  {
    id: 18,
    producto: "Gorro Gucci",
    usuario: "usuario18",
    total: "$120.00",
    estado: "En camino"
  },
  {
    id: 19,
    producto: "Bolso Michael Kors",
    usuario: "usuario19",
    total: "$130.00",
    estado: "En camino"
  },
  {
    id: 20,
    producto: "Traje Hugo Boss",
    usuario: "usuario20",
    total: "$140.00",
    estado: "Entregado"
  }
];


function Dashboard() {
  const setUrl = usePageStore((state) => state.changeUrl);

  useEffect(()=>{
    setUrl(window.location.pathname);
  }, [])

  return (<div className="flex flex-col w-[100%] min-h-screen bg-slate-200 flex-wrap">
    <section className="px-14 py-5 bg-white border-b-2 border-slate-4 00/50">
      <h2 className="font-bold text-xl font-base">Buenas tardes, Bernardo!</h2>
    </section>

    <section className="flex">
      <section className="min-h-[100%] p-5 flex flex-col gap-x-3 flex-wrap w-[100%]">
          <div className="flex gap-x-5 w-[100%] justify-center">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 flex flex-col gap-y-3 text-white rounded-lg px-5 py-3 min-w-[20em] flex-grow shadow-xl">
              <h2 className="font-bold text-2xl text-base">USUARIOS</h2>
              <h2 className="text-lg">102,502</h2>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 flex flex-col gap-y-3 text-white rounded-lg px-5 py-3 min-w-[20em] flex-grow shadow-xl">
              <h2 className="font-bold text-2xl">PRODUCTOS VENDIDOS</h2>
              <h2 className="text-lg">10,502</h2>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 flex flex-col gap-y-3 text-white rounded-lg px-5 py-3 min-w-[20em] flex-grow shadow-xl">
              <h2 className="font-bold text-2xl">INGRESOS</h2>
              <h2 className="text-lg">$52,045</h2>
            </div>
          </div>

          <section className="mt-10">
            <div className="flex justify-between py-5 border-b-2 border-slate-300">
              <h2 className="font-extrabold text-xl">Ordenes recientes</h2>

              <button className="text-indigo-500 hover:font-bold transition-[300ms]">
                VER TODO
              </button>
            </div>

            <div className="orders flex flex-col h-[250px] overflow-scroll">
             <table className="min-w-full divide-y divide-gray-200">
                {ordenes.map((orden)=>(
                  <Order data={orden} key={orden.id}/>
                ))}
              </table>
            </div>
          </section>

      </section>

      <section className="p-5 min-h-[100%] bg-slate-100 w-[50%] flex-grow">
        <h2 className="text-3xl font-bold">SUMMARY</h2>
      </section>
    </section>
  </div>);
}

export default Dashboard;