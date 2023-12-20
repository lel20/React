
import './App.css';
import freCodeCampLogo from './images/frecodecamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'; 
import { useState } from 'react';
function App() {

  const [numClics, setNumClics]=useState(0);
  const manejarClic=()=>{
    setNumClics(numClics +1);
  }
  const reiniciarContador= ()=>{
    setNumClics(0);
  }
  return (
    <div className='App'>
      
      <div className='frecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freCodeCampLogo}
          alt='logo de free code camp' />
      </div>
      <div className='contenedor_principal'>
        <Contador numClics={numClics}/>
        <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
