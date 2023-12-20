import React from "react";
import '../hoja-estilos/Contador.css'

function Contador({numClics}){
    return(
        <div className="contador">
            {numClics}
        </div>
    );
}
export default Contador;