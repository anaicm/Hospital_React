import imagen1 from '../imagenes/imagenesIndex/introduccion1.png';
import imagen2 from '../imagenes/imagenesIndex/introduccion7.png';
import imagen3 from '../imagenes/imagenesIndex/introduccion2.png';
import imagen4 from '../imagenes/imagenesIndex/introduccion3.png';
import imagen5 from '../imagenes/imagenesIndex/introduccion4.png';
import imagen6 from '../imagenes/imagenesIndex/introduccion5.png';
import imagen7 from '../imagenes/imagenesIndex/introduccion6.png';
import Style from '../estilos/cuerpo.module.css';

export const Body =()=>{
  


    return (
    
        <div className={Style.columnas}>
            <div className={Style.filas}>
                <img src={imagen1}/>
                <img src={imagen2}/>
            </div>
            <div className={Style.filas}>
                <img src={imagen3}/>
                <img src={imagen4}/>
            </div>
            <div className={Style.filas}>
                <img src={imagen5}/>
                <img src={imagen6}/>
            </div>
            <div className={Style.filas}>
                <img src={imagen7} className={Style.imgFondo}/>
            </div>
        </div>
    
        
    )
}