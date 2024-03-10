import { faPersonShelter, faUsers, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Sidebar() {
    return (<div className="flex flex-col justify-center">
        <Image src={"/images/cart.svg"} width={50} height={50} alt="logo"/>

        <Link href="#" className="flex items-center">
            <FontAwesomeIcon icon={faUsers} size="xs" width={40} height={40} color="#2677FF"/>
            <h3>Perfiles</h3>
        </Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
    </div>);
}

export default Sidebar;