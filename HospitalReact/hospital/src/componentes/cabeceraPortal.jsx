import Styles from '../estilos/cabecera.module.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagen1 from '../imagenes/logos/logo_hospital4.png'
export const CabeceraPortal =()=>{
  


    return (
    <>
        <header className={Styles.mainHeader}>
        <div className={Styles.logoContainer}>
            <Link to="/">
                <img src={imagen1}/>
            </Link>
        
            </div>
            <div className={Styles.titleContainer}>
                <h1>CenSalud</h1>
            </div>
            <div className={Styles.buttonContainer}>
            <Link to="/miPerfil">
                <a className={Styles.cButton}>Mi perfil</a>
            </Link>
            <Link to="/">
            <a className={Styles.cButton}>Cerrar Sesión</a>
            </Link>
            
                
                
            </div>
        </header>
</>
)
}