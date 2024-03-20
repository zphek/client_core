import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';

const PRODUCTOS: NextPage = () => {
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
                <Link href="/usuarios/home">
                    <p className={styles.usuariosText}>Usuarios</p>
                </Link>
            </div>
            <div className={styles.depthFramePerfiles}>
                <img className={styles.perfilesImage} src="public/../../perfiles.png" alt="Perfiles"/>
                <Link href="/perfiles/home">
                  <p className={styles.perfilesText}>Perfiles</p>
                </Link>
            </div>
            <div className={styles.depthFrameProductos}>
                <img className={styles.productosImage} src="public/../../productos.png" alt="Productos"/>
                <p className={styles.productosText}>Productos</p>
            </div>
            <div className={styles.depthFrameClientes}>
                <img className={styles.clientesImage} src="public/../../clientes.png" alt="Clientes"/>
                <Link href="/clientes/home">
                  <p className={styles.clientesText}>Clientes</p>
                </Link>
            </div>
            <div className={styles.depthFrameServicios}>
                <img className={styles.serviciosImage} src="public/../../servicios.png" alt="Servicios"/>
                <Link href="/servicios/home">
                    <p className={styles.serviciosText}>Servicios</p>
                </Link>
            </div>
            <div className={styles.depthFrameCotizaciones}>
                <img className={styles.cotizacionesImage} src="public/../../cotizaciones.png" alt="Cotizaciones"/>
                <Link href="/cotizaciones/home">
                  <p className={styles.cotizacionesText}>Cotizaciones</p>
                </Link>
            </div>
            <div className={styles.depthFrameFacturas}>
                <img className={styles.facturasImage} src="public/../../facturas.png" alt="Facturas"/>
                <Link href="/facturas/home">
                  <p className={styles.facturasText}>Facturas</p>
                </Link>
            </div>
            <div className={styles.depthFrameCuentasPorCobrar}>
                <img className={styles.cuentasPorCobrarImage} src="public/../../cuentasPorCobrar.png" alt="Cuentas por cobrar"/>
                <Link href="/cuentas-a-cobrar/home">
                  <p className={styles.cuentasPorCobrarText}>Cuentas Por Cobrar</p>
                </Link>
            </div>
          </div>
          <img className={styles.dividerVertical} src="public/../../vertical line.png" alt="vertical line"/>
          <div className={styles.rightView}>
          <h1 className={styles.titleRightView}>Productos</h1>
          <h2 className={styles.subtitleRightView}>Manejar productos en la aplicación</h2>
          <div className={styles.searchUserBox}>
            <img className={styles.searchIcon} src="public/../../search lupa.png" alt="search" />
            <input className={styles.searchBar} type="text" placeholder="Buscar producto"/>
          </div>
          <table className={styles.userCrud}>
              <thead>
                <tr>
                  <th></th>
                  <th >Productos</th>
                  <th>Cantidad</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>Proveedor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="public/../../image frame.png" alt="Foto"></img></td>
                  <td className={styles.textosTables}>Lorem</td>
                  <td className={styles.textosTables}>70</td>
                  <td className={styles.textosTables}>Ipsum</td>
                  <td className={styles.textosTables}>$0.00</td>
                  <td className={styles.textosTables}>Adidas</td>
                  <td>
                    <Link href="/productos/edicion">
                      <button className={styles.editButton}>Editar</button>
                    </Link>
                    <Link href="/productos/eliminar">
                      <button className={styles.deleteButton}>Eliminar</button>
                    </Link>
                  </td>
                </tr> 
              </tbody>
          </table>
          <div className={styles.verticalDividerTable}/>
          <Link href="/productos/creacion_producto">
            <button className={styles.addUserButton}>Nuevo Producto</button>
          </Link>
        </div>
        </div>
        <img className={styles.footerImage} src="public/../../footer.png" alt="footer"/>
      </div>
    );
};

export default PRODUCTOS;