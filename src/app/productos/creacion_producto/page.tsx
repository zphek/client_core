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
          <h1 className={styles.titleRightView}>Crear Producto</h1>
          <label className={styles.nombreProducto}>Nombre del producto</label>
          <input className={styles.inputNombreProducto} type="text" placeholder="Nombre del producto"/>
          <label className={styles.cantidadStock}>Cantidad en stock</label>
          <input className={styles.inputCantidadStock} type="text" placeholder="Cantidad en stock"/>
          <label className={styles.tipoProducto}>Tipo de producto</label>
          <select className={styles.dropdown}>
            <option value="0">Seleccione un tipo de producto</option>
            <option value="1">Producto 1</option>
            <option value="2">Producto 2</option>
          </select>
          <label className={styles.precioProducto}>Precio del producto</label>
          <input className={styles.inputPrecioProducto} type="text" placeholder="$0.00"/>
          <label className={styles.proveedorProducto}>Proveedor del producto</label>
          <input className={styles.inputProveedorProducto} type="text" placeholder="Proveedor del producto"/>
          <label className={styles.imagenProducto}>Imagen del producto</label>
          <input className={styles.inputImagenProducto} type="file" id="imagenProducto" name="imagenProducto" accept="image/**"/>
          <button className={styles.botonGuardarCambios}>Guardar Cambios</button>
            <Link href="/productos/home">
                <button className={styles.botonCancelar}>Cancelar</button>
            </Link>
        </div>
        </div>
        <img className={styles.footerImage} src="public/../../footer.png" alt="footer"/>
      </div>
    );
};

export default PRODUCTOS;