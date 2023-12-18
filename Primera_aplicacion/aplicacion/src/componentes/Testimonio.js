import React from "react";

export function  Testimonio(){
    return(
        <div className='cont-testimonio'>
            <img 
                className='img-testimonio'
                src={require('../images/Emma.png')}
                alt='Foto Emma'>
            </img>
            <dic className='cont-text-testimonio'>
                <p className='name-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
                <p className='descripcion-testimonio'>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>

            </dic>

        </div>
    )
}
  