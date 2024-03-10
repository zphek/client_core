import type { NextPage } from "next";
import styles from "./index.module.css";

const PERFILES: NextPage = () => {
    return (
        <div>
        <header className={styles.negociaCoreHeader}>
            <img className={styles.negociaImage} src="public/../../Group 1.jpg" alt="NegociaCore"/>
        </header>
      <hr className={styles.dividerHorizontal}/>
      <div className={styles.mainContainer}>
        <div className={styles.leftMenu}>
          <h1 className={styles.title}>Registros</h1>
          <div className={styles.depthFrameUsuarios}>
              <img className={styles.usuariosImage} src="public/../../usuarios.png" alt="Usuarios"/>
              <p className={styles.usuariosText}>Usuarios</p>
          </div>
          <div className={styles.depthFramePerfiles}>
              <img className={styles.perfilesImage} src="public/../../perfiles.png" alt="Perfiles"/>
              <p className={styles.perfilesText}>Perfiles</p>
          </div>
          <div className={styles.depthFrameProductos}>
              <img className={styles.productosImage} src="public/../../productos.png" alt="Productos"/>
              <p className={styles.productosText}>Productos</p>
          </div>
          <div className={styles.depthFrameClientes}>
              <img className={styles.clientesImage} src="public/../../clientes.png" alt="Clientes"/>
              <p className={styles.clientesText}>Clientes</p>
          </div>
          <div className={styles.depthFrameServicios}>
              <img className={styles.serviciosImage} src="public/../../servicios.png" alt="Servicios"/>
              <p className={styles.serviciosText}>Servicios</p>
          </div>
          <div className={styles.depthFrameCotizaciones}>
              <img className={styles.cotizacionesImage} src="public/../../cotizaciones.png" alt="Cotizaciones"/>
              <p className={styles.cotizacionesText}>Cotizaciones</p>
          </div>
          <div className={styles.depthFrameFacturas}>
              <img className={styles.facturasImage} src="public/../../facturas.png" alt="Facturas"/>
              <p className={styles.facturasText}>Facturas</p>
          </div>
          <div className={styles.depthFrameCuentasPorCobrar}>
              <img className={styles.cuentasPorCobrarImage} src="public/../../cuentasPorCobrar.png" alt="Cuentas por cobrar"/>
              <p className={styles.cuentasPorCobrarText}>Cuentas Por Cobrar</p>
          </div>
        </div>
        <img className={styles.dividerVertical} src="public/../../vertical line.png" alt="vertical line"/>
      </div>
      <img className={styles.footerImage} src="public/../../footer.png" alt="footer"/>
    </div>
    );
};

export default PERFILES;