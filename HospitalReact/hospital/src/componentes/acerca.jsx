import Style from '../estilos/acerca.module.css';
import imagen1 from '../imagenes/imagenes-centros/edificio_3.png';
import imagen2 from '../imagenes/imagenes-centros/interior_centro.png';
import { Header } from './cabecera';
import { Navegacion } from './barraNavegacion';
import { Footer } from './footer';
import { ContenidoAcerca } from './contenidoAcercaDe';

export const Acerca =()=>{
   
    return (
    <>
     <Header/>
    <Navegacion/>
    
    <div>
       <div>
            <div className={Style.tamIzquierdo}>
                <img src={imagen1}  alt="Especialista"/>
            </div>
            <div className={Style.tamIzquierdo}>
                <img src={imagen2} alt="Especialista"/>
            </div>
        
        </div>
     
        <div>
            <div className={Style.tamIzquierdo}>
                <div className={Style.divIframe}>
                    <iframe className={Style.iframe} title='raices' id='iframe' src={ContenidoAcerca} />
                </div>
            </div>
        </div>
    </div>
        <Footer/>      
    </>
    )
}