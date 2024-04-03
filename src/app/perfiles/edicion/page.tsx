import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from 'next/link';

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
                <Link href="/usuarios/home">
                    <p className={styles.usuariosText}>Usuarios</p>
                </Link>
            </div>
            <div className={styles.depthFramePerfiles}>
                <img className={styles.perfilesImage} src="public/../../perfiles.png" alt="Perfiles"/>
                <p className={styles.perfilesText}>Perfiles</p>
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
            <h1 className={styles.titleRightView}>Editar Perfil</h1>
            <label className={styles.nombrePerfil}>Nombre del perfil</label>
            <input className={styles.inputNombrePerfil} type="text" placeholder="Nombre del perfil"/>
            <label className={styles.descripcion}>Descripción</label>
            <textarea className={styles.inputDescripcion} placeholder="Ejemplo: Este perfil tendrá todos los permisos"/>
            <label className={styles.permisos}>Permisos</label>
            <label className={styles.crear}>
                <input type="checkbox" className={styles.checkboxCrear}/>
                Crear
            </label>
            <label className={styles.descripcionCrear}>Este permiso otorga al usuario la capacidad de agregar nuevos datos al sistema.</label>
            <label className={styles.leer}>
                <input type="checkbox" className={styles.checkboxLeer}/>
                Leer
            </label>
            <label className={styles.descripcionLeer}>Este permiso permite al usuario ver los datos existentes en el sistema.</label>
            <label className={styles.actualizar}>
                <input type="checkbox" className={styles.checkboxActualizar}/>
                Actualizar
            </label>
            <label className={styles.descripcionActualizar}>Este permiso otorga al usuario la capacidad de modificar los datos existentes en el sistema.</label>
            <label className={styles.eliminar}>
                <input type="checkbox" className={styles.checkboxEliminar}/>
                Eliminar
            </label>
            <label className={styles.descripcionEliminar}>Este permiso permite al usuario eliminar datos del sistema.</label>
            <button className={styles.botonGuardarCambios}>Guardar Cambios</button>
            <Link href="/perfiles/home">
                <button className={styles.botonCancelar}>Cancelar</button>
            </Link>
          </div>
        </div>
        <img className={styles.footerImage} src="public/../../footer.png" alt="footer"/>
      </div>
    );
};

export default PERFILES;