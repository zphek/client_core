import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';

const PRODUCTOS: NextPage = () => {
    return (
        <div className={styles.wholeContainer}>
        <header className={styles.negociaCoreHeader}>
            <img className={styles.negociaImage} src="public/../../Group 1.jpg" alt="NegociaCore"/>
        </header>
        <hr className={styles.dividerHorizontal}/>
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Productos</h1>
            <h2 className={styles.secondaryTitle}>
                <span>¿Esta seguro que quiere eliminar este producto?</span>
                <span>Esta acción no se puede revertir.</span>
            </h2>
            <Link href="/productos/home">
                <button className={styles.cancelar}>Cancelar</button>
            </Link>
            <button className={styles.eliminar}>Confirmar</button>
        </div>
        <img className={styles.footerImage} src="public/../../footer.png" alt="footer"/>
    </div>
    );
};

export default PRODUCTOS;