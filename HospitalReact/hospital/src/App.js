import React from 'react';
import { Header } from './componentes/cabecera';
import { Navegacion } from './componentes/barraNavegacion';
import { Footer } from './componentes/footer';
import { Body } from './componentes/cuerpo';

function App() {
  return (    
    <div className="fondo">
    <Header/>
    <Navegacion/>
    <Body/>
    <Footer/>            
    </div>
  );
}

export default App;
