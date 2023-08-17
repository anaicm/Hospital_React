import Styles from '../estilos/cabecera.module.css';
import logo from '../imagenes/logos/logo_hospital4.png';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Header =()=>{
  


    return (
    
        <header className={Styles.mainHeader}>
            <div className={Styles.logoContainer}>
            <Link to='/'>
                <img src={logo}/>
                </Link>
            </div>
            <div className={Styles.titleContainer}>
                <h1>CenSalud</h1>
            </div>
            <div className={Styles.buttonContainer}>
                <button className={`${Styles.cButton} ${Styles.userBbutton}`}>
                    <Link to='/login'>
                        Área Cliente
                    </Link></button>
                <button className={`${Styles.cButton} ${Styles.signupButton}`}>
                    <Link to='/registro'>
                        Registrarse
                    </Link></button>
            </div>
        </header>
    
        
    )
}

 
