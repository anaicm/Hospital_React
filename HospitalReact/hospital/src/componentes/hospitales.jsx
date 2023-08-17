import Style from '../estilos/hospitales.module.css';
import { Header } from './cabecera';
import { Navegacion } from './barraNavegacion';
import { Footer } from './footer';
import imagen1 from '../imagenes/imagenes-centros/edificio_1.png';
import imagen2 from '../imagenes/imagenes-centros/edificio_2.png';
import imagen3 from '../imagenes/imagenes-centros/edificio_3.png';
import imagen4 from '../imagenes/imagenes-centros/edificio_4.png';
import imagen5 from '../imagenes/imagenes-centros/edificio_5.png';
import imagen6 from '../imagenes/imagenes-centros/edificio_6.png';
import imagen7 from '../imagenes/imagenes-centros/edificio_7.png';
import imagen8 from '../imagenes/imagenes-centros/edificio_8.png';
import imagen9 from '../imagenes/imagenes-centros/edificio_9.png';
import imagen10 from '../imagenes/imagenes-centros/edificio_10.png';



export const Hospitales =()=>{
   
    return (
        <>
        <Header/>
       <Navegacion/>
       <div className={Style.row}>
            <div className={Style.contenidoCentos}>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen1} alt="Especialista"/>
                <div>
                   <p><h4> Salud Esperanza</h4>
                       
                        Centro de salud Esperanza en C/Lope de vega,63 Granada
                        Teléfono: <b>953112407</b>
                    </p>
                </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen2} alt="Especialista"/>
                    <div>
                        <p><h4> Salud Real</h4>
                            
                            Centro de salud Real en C/Real,42 Almeria
                            Teléfono: <b>952774411</b>
                        </p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen3} alt="Especialista"/> 
                    <div>
                        <p><h4> Salud Vida</h4>
                            
                            Centro de salud Vida en C/Principal,70 Cádiz
                            Teléfono: <b>975556314</b></p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen4} alt="Especialista"/> 
                    <div>
                        <p><h4> Salud Mar adentro</h4>
                            
                            Centro de salud Mar adentro en C/nueva,17 Torremolinos Málaga
                            Teléfono: <b>952223344</b></p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen5} alt="Especialista"/>
                    <div>
                        <p><h4> Salud </h4>
                            
                            Centro de salud en C/Traviata,20 Torremolinos Málaga
                            Teléfono: <b>952336644</b></p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen6} alt="Especialista"/>
                    <div>
                        <p><h4> Salud Bienestar</h4>
                            
                            Centro de salud Bienestar en C/Federico,17 Marbella Málaga
                            Teléfono: <b>954987741</b></p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen7} alt="Especialista"/>
                    <div>
                         <p><h4> Salud Oliva</h4>
                             
                            Centro de salud Oliva en C/Carretería,30 Jaén
                            Teléfono: <b>953554308</b></p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen8} alt="Especialista"/>
                    <div>
                        <p><h4> Salud Bienestar</h4>
                            
                            Centro de salud Bienestar en C/Conde San Isidro,56 Huelva
                            Teléfono: <b>952554680</b></p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen9} alt="Especialista"/>
                    <div>
                        <p><h4> Salud Al-Andalus</h4>
                            
                            Centro de salud Al-Andalus en C/San Rafael,127 Córdoba
                            Teléfono: <b>955758040</b></p>
                    </div>
            </div>
            <div className={Style.tarjetas_centros_y_especialistas}>
                <img src={imagen10} alt="Especialista"/>
                    <div>
                        <p><h4> Salud Sevilla</h4>
                            
                            Centro de salud Sevilla en C/Alfarería, 30 Sevilla
                            Teléfono: <b>956778899</b></p>
                    </div>
            </div>
        </div> 
    </div>
    <Footer/>      
</>  
    )
}