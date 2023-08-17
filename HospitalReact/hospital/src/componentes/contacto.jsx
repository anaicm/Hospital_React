import Style from '../estilos/contacto.module.css';
import imagen from '../imagenes/imagenes-centros/contacto.png';
import { Header } from './cabecera';
import { Navegacion } from './barraNavegacion';
import { Footer } from './footer';

export const Contacto =()=>{
   
    return (
    <>
     <Header/>
    <Navegacion/>
    
        <div className={Style.tamanoContenedorContacto}>
            <div>
                <div>
                    <img src={imagen} className={Style.imagen} alt="contacto" />
                </div>
                <div>
                    <div>
                        <h5 className={Style.titulo}>Seleccione Ciudad</h5>
                        <hr />
                        <p className={Style.Contacto}>
                            Contacto: +900-100-200 | CenSalud@gmail.com
                        </p>
                      
                            <input required type="text" id="nom_ciudad" name="nom_ciudad" placeholder="Ciudad" />
                            <button type="submit" id="buscar" name="buscar" value="Enviar">Buscar</button>
                         

                    </div>
                </div>
            </div>
        </div>
        <Footer/>      
        </>)
}