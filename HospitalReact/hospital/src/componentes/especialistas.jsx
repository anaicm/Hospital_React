import Style from '../estilos/hospitales.module.css';//contiene css centros hospitalarios y especialistas de los centros
import { Header } from './cabecera';
import { Navegacion } from './barraNavegacion';
import { Footer } from './footer';
import imagen1 from '../imagenes/imagenes_medicos/medico2_M.png';
import imagen2 from '../imagenes/imagenes_medicos/medico1_H.png';
import imagen3 from '../imagenes/imagenes_medicos/medico3_M.png';
import imagen4 from '../imagenes/imagenes_medicos/medico4_H.png';
import imagen5 from '../imagenes/imagenes_medicos/medico5_M.png';
import imagen6 from '../imagenes/imagenes_medicos/medico6_H.png';
import imagen7 from '../imagenes/imagenes_medicos/medico7_M.png';
import imagen8 from '../imagenes/imagenes_medicos/medico8_H.png';
import imagen9 from '../imagenes/imagenes_medicos/medico9_M.png';
import imagen10 from '../imagenes/imagenes_medicos/medico10_H.png';
import imagen11 from '../imagenes/imagenes_medicos/medico11_M.png';
import imagen12 from '../imagenes/imagenes_medicos/medico12_H.png';
import imagen13 from '../imagenes/imagenes_medicos/medico13_M.png';
import imagen14 from '../imagenes/imagenes_medicos/medico14_H.png';
import imagen15 from '../imagenes/imagenes_medicos/medico15_M.png';
import imagen16 from '../imagenes/imagenes_medicos/medico16_H.png';
import imagen17 from '../imagenes/imagenes_medicos/medico17_M.png';
import imagen18 from '../imagenes/imagenes_medicos/medico18_H.png';
import imagen19 from '../imagenes/imagenes_medicos/medico19_M.png';
import imagen20 from '../imagenes/imagenes_medicos/medico20_H.png';


export const Especialista =()=>{
   
    return (
    <>
     <Header/>
    <Navegacion/>
    <div className={Style.row}>
    
    <div className={Style.contenidoCentos}>
       
  
    <div className={Style.tarjetas_centros_y_especialistas}>
      <img src={imagen1}alt="Especialista"/>
      <div>
       
        <p><h4>Traumatología</h4>
          <h5>Concha López Cueto</h5>
        
            Da servicio en el centro de salud Esperanza en C/Lope de vega,63 Granada</p>
      </div>
    </div>
    <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen2}alt="Especialista"/>
      <div>
        <p><h4>Médico familiar </h4>
          <h5>Alberto Nuñez Ramirez</h5>
      
            Da servicio en el centro de salud Salud Real en C/Real,42 Almeria</p>
      </div>
    </div>
 
    <div className={Style.tarjetas_centros_y_especialistas}>
        <img src={imagen3}alt="Especialista"/>
        <div>
            <p><h4>Oftalmología </h4>
            <h5>Almudena Espejo Conde</h5>
       
            Da servicio en el centro de salud SaludSevilla  en C/Alfareria,35 Sevilla</p>
        </div>
    </div>
    <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen4}alt="Especialista"/>
    <div>
      <p><h4>Podología </h4>
        <h5>Manuel Ramírez López</h5>

        Da servicio en el centro de Mar adentro en C/nueva,17 Torremolinos .</p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen5}alt="Especialista"/>
    <div>
      <p><h4>Urología </h4>
        <h5>Isabel Montes Alpes</h5>
       
        Da servicio en el centro de Mar adentro en C/nueva,17 Torremolinos </p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen6}alt="Especialista"/>
    <div>
      <p><h4>Oftalmología </h4>
        <h5>Eustaquio Sanchez Ramírez</h5>
   
        Da servicio en el centro de Salud en C/Traviata,20 Torremolinos </p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen7}alt="Especialista"/>
    <div>
      <p><h4>Ginecología </h4>
        <h5>María Trinidad Los Santos Vega</h5>
      
        Da servicio en el centro de Salud en C/Traviata,20 Torremolinos </p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen8}alt="Especialista"/>
    <div>
      <p><h4>Dentista </h4>
        <h5>Francisco Gutierrez Sánchez</h5>
        
        Da servicio en el centro de bienestar en C/Federico,17 Marbella </p>
    </div>
  </div> 
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen9}alt="Especialista"/>
    <div>
      <p><h4>Dentista </h4>
        <h5>María Trinidad Los Santos Vega</h5>
       
        Da servicio en el centro de Salud Oliva en C/Carreteria,30 Martos </p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen10}alt="Especialista"/>
    <div>
      <p><h4>Médico familiar </h4>
        <h5>Alejandro García Paez</h5>
        
        Da servicio en el centro de Salud Al-Andalus en C/San Rafael,127 Córdoba </p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen11}alt="Especialista"/>
    <div>
      <p><h4>Areología </h4>
        <h5>Matilde Sanz Alcaraz</h5>
        
        Da servicio en el centro de SaludBienestar en C/Conde San Isidro,56 Huelva </p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen12}alt="Especialista"/>
    <div>
      <p><h4>Oncología </h4>
        <h5>Carmelo Aranda Aranda</h5>
      
        Da servicio en el centro de SaludSevilla  en C/Alfareria,35 Sevilla</p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen13}alt="Especialista"/>
    <div>
      <p><h4>Médico familiar </h4>
        <h5>Ana Pérez Cuéllar</h5>
       
        Da servicio en el centro de SaludSevilla  en C/Alfareria,35 Sevilla</p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen14}alt="Especialista"/>
    <div>
      <p><h4>Endocrino </h4>
        <h5>Anotino Cuevas Alpino</h5>
        
        Da servicio en el centro de saludReal en C/Real,42 Sevilla</p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen15}alt="Especialista"/>
      <div>
        <p><h4>Dermatología </h4>
        <h5>María Luisa Contreras Carrillo</h5>
        
          Da servicio en el centro de Salud Oliva en C/Carreteria,30 Martos</p>
      </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen16}alt="Especialista"/>
    <div>
      <p><h4>Dietista </h4>
        <h5>José González Armenteros</h5>
        
          Da servicio en el centro de Salud en C/Traviata,20 Torremolinos </p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen17}alt="Especialista"/>
    <div>
      <p><h4>Psiquiatría </h4>
      <h5>Estefanía Aguilera Monzon</h5>
    
         Da servicio en el centro de Salud Oliva en C/Carreteria,30 Martos</p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen18}alt="Especialista"/>
    <div>
      <p><h4>Neurología </h4>
      <h5>Víctor Cruz López</h5>
     
        Da servicio en el centro de Salud Vida en C/Principas,70 Martos</p>
    </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen19}alt="Especialista"/>
      <div>
        <p><h4>Cardiología</h4>
        <h5>Rosana Villanueba Martínez</h5>
        
          Da servicio en el centro de Salud Esperanza en C/Lope de Vega,63 Granada</p>
      </div>
  </div>
  <div className={Style.tarjetas_centros_y_especialistas}>
    <img src={imagen20}alt="Especialista"/>
      <div>
        <p><h4>Hematología</h4>
        <h5>Pablo Ruiz Sanchez</h5>
        
          Da servicio en el centro de Salud Esperanza en C/Lope de Vega,63 Granada</p>
      </div>
  </div>
  </div>
  
        </div>
        <Footer/>      
        </>)
}