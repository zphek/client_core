"use client"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SuccessAlert = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 3000); // Ocultar el mensaje después de 3 segundos

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 absolute flex bg-green-200 px-10 py-3 items-center justify-center gap-x-3 rounded-lg bottom-32 left-42`}>
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl"/>
            <h2 className="text-xl">Se ha creado correctamente!</h2>
        </div>
    );
}
 
export default SuccessAlert;
