import Styles from '../../estilos/miPerfil.module.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navegacion } from '../barraNavegacion';
import { Footer } from '../footer';
import { CabeceraPortal } from '../cabeceraPortal';
import imagen1 from '../../imagenes/imagenes_portal_de_usuario/aniadir_foto_perfil_editada.png';
import imagen2 from '../../imagenes/imagenes_portal_de_usuario/logo_cambiar_imagen.png';




export const MiPerfil =()=>{
  
   return (
      <>
        <CabeceraPortal/>
        <Navegacion/>
        <div className={Styles.contenedorPerfil}>
            {/*caja para mostrar los datos registrados*/}
            <div className={Styles.contenedorDatos}>
                <table>
                    <div className={Styles.contenedorPerfil}>
                        <div className={Styles.etiquetaDatos}><b>FOTO: </b></div>
                        {/*traer con php los datos del usuario*/}
                        <div className={Styles.contenedorImagen}>
                            <img src={imagen1} className={Styles.etiquetaDatosFotos}/>
                        </div>
                        <div className={Styles.contenedorCambiarImagen}>
                            <div className={Styles.logoModificar}><img
                                    src={imagen2} className={Styles.etiquetaDatosFotos}/></div>
                            <div className={Styles.etiquetaDatos}><b>Cambiar foto </b></div>
                        </div>
                    </div>
                    
                    <tr>
                        <td>
                            <div className={Styles.etiquetaDatos}><b>NOMBRE: </b>
                            <input type='text' placeholder='Nombre'></input>
                            </div>
                            {/*-------------------------------------------------------------------*/}
                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={Styles.etiquetaDatos}><b>APELLIDOS: </b>
                            <input type='text' placeholder='Apellidos'></input>
                            </div>
                            {/*-------------------------------------------------------------------*/}
                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={Styles.etiquetaDatos}><b>FECHA DE NACIMIENTO: </b>
                            <input type='date' placeholder='00/00/0000'></input>
                            </div>
                            {/*------------------------------------------------------------------------*/}
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={Styles.etiquetaDatos}><b>TELÉFONO: </b>
                            <input type='text' placeholder='Teléfono'></input>
                            </div>
                            {/*------------------------------------------------------------------------*/}
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={Styles.etiquetaDatos}><b>EMAIL: </b>
                            <input type='text' placeholder='Email'></input>
                            </div>
                           {/*------------------------------------------------------------------------*/}
                            
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <div className={Styles.etiquetaDatos}><b>DNI: </b>
                        <input type='text' placeholder='Dni'></input>
                        </div>
                        {/*------------------------------------------------------------------------*/}
                       
                    </td>
                    </tr>
                </table>
            </div>
            {/*--contenedor derecho-----------------------------------------------------------------------------------------------*/}
            <div className={Styles.contenedorDatosModificar}>
                <div className={Styles.contenedorCambiarImagen}>
                    {/*--menú modificar datos-----------------------------------*/}
                    
                        
                        <div id="datos" className={`${Styles.etiquetaDatos} ${Styles.menu}`}>
                            Restablecer datos
                            
                        </div>
                        {/*--formulario modificar datos--*/}
                        <div id="form_datos" className={Styles.submenu}>
                            <form action="#" method="post" name="form-actualizar-datos">
                                <table>
                                    <tr>
                                        <td>
                                            <input type="text" name="nombre" id="nombre" placeholder="Nombre"required/>
                                          
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="apellido" id="apellido" placeholder="Apellidos"required/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="telefono" id="telefono"placeholder="Teléfono de contacto"required/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="fnacimiento" id="fnacimiento"placeholder="Fecha de nacimiento" required/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input disabled type="text" name="dni" id="dni" placeholder="Documento nacional (DNI)" required/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="email" id="email" placeholder="Email" required/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="boton">
                                                <input type="submit" name="modificar_datos" id="modificar_datos"
                                                    value="Enviar" class="boton-actualizar"/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                    {/*--menú modificar contraseña------------------------------*/}
                    <div className={Styles.contenedorPerfil}>
                        <div id="contra" className={`${Styles.etiquetaDatos} ${Styles.menu}`}>
                            Restablecer contraseña
                        </div>
                        {/*--formulario modificar contraseña--*/}
                        <div className={Styles.submenu} id="form_contra">
                            <form action="#" method="post" name="form-cambiar-contra">
                                <table>
                                    <tr>
                                        <td>
                                            <input type="text" name="contra" id="contra" placeholder="Contraseña actual" required/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="contra1" id="contra1" placeholder="Nueva contraseña" required/>
                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="contra2" id="contra2" placeholder="Verificar nueva contraseña" required/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="boton">
                                                <input type="submit" name="actualizar_contra" id="actualizar_contra"
                                                    value="Enviar" class="boton-actualizar"/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
           
        </div>

        <Footer/>
      
      </>
    
        
    )
}