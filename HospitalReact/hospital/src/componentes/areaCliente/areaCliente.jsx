import Styles from '../../estilos/areaCliente.module.css';//contiene los estilos del registo y login
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navegacion } from '../barraNavegacion';
import { Footer } from '../footer';
import imagen1 from '../../imagenes/imagenes_portal_de_usuario/pedir_cita.png';
import imagen2 from '../../imagenes/imagenes_portal_de_usuario/mis_citas.png';
import imagen3 from '../../imagenes/imagenes_portal_de_usuario/informes2.png';
import imagen4 from '../../imagenes/imagenes_portal_de_usuario/salud.png';
import { CabeceraPortal } from '../cabeceraPortal';

export const AreaCliente =()=>{
  


    return (
      <>
 <CabeceraPortal/>
 <Navegacion/>
 <div className={Styles.cuerpo}>
        <div className={Styles.cabeceraCuerpo}>
            <p className={Styles.tituloCabecera}>Bienvenido a tu portal de salud</p>
        </div>
    </div>
    <div className={Styles.menuTarjetas}>
        <div className={Styles.tarjeta}>

          <Link to="/pedirCita">
            <div>
              Pedir cita
            </div>
            <div>
              <img src={imagen1} className={Styles.imagenesEtiquetas}/>
            </div>
          </Link>
        </div>

        <div className={Styles.tarjeta}>
            
          <Link to="/historialCitas">
            <div>
                Mis Citas
            </div>
            <div>
              <img src={imagen2} className={Styles.imagenesEtiquetas}/> 
            </div>
          </Link>
    
        </div>
        <div className={Styles.tarjeta}>
           
          <Link to="/informes">
            <div>
                Historial
            </div>
            <div>
                <img src={imagen3} className={Styles.imagenesEtiquetas}/> 
            </div>
          </Link>
             
        </div>
        <div className={Styles.tarjeta}>
        
          <Link to="/consejoSalud">
            <div>
              Salud
            </div>
            <div>
              <img src={imagen4}className={Styles.imagenesEtiquetas}/>
            </div>
          </Link>
          
          
        </div>
    </div>
 <Footer/>
      
      </>
    
        
    )
}