import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';

const USUARIOS: NextPage = () => {
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
                <Link href="/perfiles/home">
                  <p className={styles.perfilesText}>Perfiles</p>
                </Link>
            </div>
            <div className={styles.depthFrameProductos}>
                <img className={styles.productosImage} src="public/../../productos.png" alt="Productos"/>
                <Link href="/productos/home">
                  <p className={styles.productosText}>Productos</p>
                </Link>
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
            <h1 className={styles.titleRightView}>Crear Usuario</h1>
            <label className={styles.nombreUsuario}>Nombre de usuario</label>
            <input className={styles.inputNombreUsuario} type="text" placeholder="Nombre de usuario"/>
            <label className={styles.nombreCompleto}>Nombre completo</label>
            <input className={styles.inputNombre} type="text" placeholder="Nombre completo"/>
            <label className={styles.contraseña}>Contraseña</label>
            <input className={styles.inputContraseña} type="text" placeholder="Contraseña"/>
            <label className={styles.confirmarContraseña}>Confirmar contraseña</label>
            <input className={styles.inputConfirmarContraseña} type="text" placeholder="Confirmar contraseña"/>
            <label className={styles.numeroTelefono}>Número de teléfono</label>
            <input className={styles.inputNumeroTelefono} type="text" placeholder="Número de teléfono"/>
            <label className={styles.correoElectronico}>Correo electrónico</label>
            <input className={styles.inputCorreoElectronico} type="text" placeholder="Correo electrónico"/>
            <label className={styles.rolUsuario}>Rol de usuario</label>
            <select className={styles.dropdown}>
                <option value="Seleccionar">Seleccione un tipo de rol</option>
                <option value="Administrador">Administrador</option>
                <option value="Usuario">Usuario</option>
            </select>
            <button className={styles.botonGuardarCambios}>Guardar Cambios</button>
            <Link href="/usuarios/home">
                <button className={styles.botonCancelar}>Cancelar</button>
            </Link>
          </div>
        </div>
        <img className={styles.footerImage} src="public/../../footer.png" alt="footer"/>
      </div>
    );
};

export default USUARIOS;