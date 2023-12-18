import React from "react";

export function  Testimonio(props){
    return(
        <div className='cont-testimonio'>
            <img 
                className='img-testimonio'
                src={require(`../images/${props.imagen}.png`)}
                alt='Foto Emma'>
            </img>
            <dic className='cont-text-testimonio'>
                <p className='name-testimonio'>{props.nombre}</p>
                <p className='cargo-testimonio'>{props.cargo}</p>
                <p className='descripcion-testimonio'>"{props.descripcion}"</p>

            </dic>

        </div>
    )
}
  