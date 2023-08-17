import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Navegacion =()=>{
   
    return (
    <div>
        <ul>
            <li>
                <Link to="/">
                    Inicio
                </Link>
            </li>
            <li>
                <Link to="/acerca">
                    Acerca de
                </Link>
            </li>
            <li>
                <Link to="/contacto">
                    Contacto
                </Link>
            </li>
            <li>
                <Link to="/hospital">
                    Hospitales
                </Link>
            </li>
            <li>
                <Link to="/especialistas">
                    Especialistas
                </Link>
            </li>
            <li>
                <Link to="/areaCliente">
                    Área cliente
                </Link>
            </li>
        </ul>
    </div>    
    )
}