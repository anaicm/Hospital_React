import Styles from '../estilos/login.module.css';//contiene los estilos del registo y login
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navegacion } from './barraNavegacion';
import { Footer } from './footer';

export const Registro =()=>{
  


    return (
    <>
  
       <Navegacion/>
        <div className={Styles.containerRegistro}>
        <div className={Styles.loginBox}>
            <h2>Registro de usuario</h2>
          
            <form>
                <input className={`${Styles.foco} ${Styles.Estilosinput}`} type="text" id="nombre" name="nombre" required placeholder="Nombre"/>

                <input className={`${Styles.foco} ${Styles.Estilosinput}`}type="text" id="apellidos" name="apellidos" required placeholder="Apellidos"/>

                <input className={`${Styles.foco} ${Styles.Estilosinput}`} type="text" id="dni" name="dni" required placeholder="Documento (DNI)"/>

                <input className={Styles.Estilosinput} type="datetime-local" id="fnacimiento" name="fnacimiento" required
                    placeholder="Fecha de Nacimiento"/>

                <input className={Styles.Estilosinput} type="tel" id="telefono" name="telefono" required placeholder="Teléfono"/>

                <input className={Styles.Estilosinput} type="email" id="email" name="email" required placeholder="Email"/>

                <input className={`${Styles.foco} ${Styles.Estilosinput}`} type="password" id="password" name="password" required placeholder="Contraseña"/>
              
                <button> <Link to='/'>{/**boton preparado para enviar cuando se realice la página */}
                        Enviar
                        </Link>
                </button>

                <button> <Link to='/'>
                        Volver
                        </Link>
                </button>
            </form>
        </div>
    </div>
    <Footer/> 
    </>
        
    )
}