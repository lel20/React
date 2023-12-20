import React from 'react';
import '../hoja-estilos/Boton.css'

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button
            //es botonDeClic?. si lo es se asigna la clase 'boton-clic' caso contrario se asigna 'boto-reiniciar' 
            className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}
export default Boton;