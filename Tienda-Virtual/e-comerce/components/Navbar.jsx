import Link from "next/link";
import Enlaces from "./enlaces/Enlaces";

// Se crea el componente para la barra de navegación; y se lo exporta para ser utilizado

export default function Navbar() {
    return (
        <div className="mt-5 flex justify-between p-4 items-center shadow-md">
            <Link className="font-bold text-lg text-violet-950" href={'/'}> TVirtual</Link>
            <div className="">
               <Enlaces link={'/signin'} texto='Iniciar'/>
               <Enlaces link={'/signup'} texto='Registrarse'/>
               <Enlaces link={'/'} texto='Salir'/>
            </div>

        </div>
    );
}
