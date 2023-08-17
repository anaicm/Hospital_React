import Styles from '../../estilos/salud.module.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navegacion } from '../barraNavegacion';
import { Footer } from '../footer';
import { CabeceraPortal } from '../cabeceraPortal';
import imagen1 from '../../imagenes/imagenes_salud/salud_bienestar.png';
import imagen2 from '../../imagenes/imagenes_salud/investigacion.png';
import imagen3 from '../../imagenes/imagenes_salud/prevencion.png';


export const Salud =()=>{
  


    return (
      <>
       <CabeceraPortal/>
        <Navegacion/>
        <div className={Styles.row}>
            <div >
                <div className={Styles.tamTarjetaSalud} onclick="document.getElementById('iframe').src ='contenido_salud.html'">
                    <img src={imagen1} alt="salud"/>
                        Salud y bienestar
                </div>
            <div className={Styles.tamTarjetaSalud} onclick="document.getElementById('iframe').src ='contenido_investigación.html'">
                <img src={imagen2} alt="investigación"/>
                    Investigación
            </div>
            <div className={Styles.tamTarjetaSalud} onclick="document.getElementById('iframe').src ='contenido_prevención.html'">
                <img src={imagen3} alt="prevención"/>
                    Prevención
            </div>
        </div>
        {/**Contenido derecho */}
        <div >
           
        </div>
       
    </div>

    <Footer/>
      
      </>
    
        
    )
}