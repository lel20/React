//use client permite que el código se ejecute en el navegador y no en el servidor
'use client'
//Este componen permite que se pueda acceder a la sesión de usuario en cualquier parte de la aplicación
import { SessionProvider } from "next-auth/react";
//Provider recibe como parametro un props llamado children que es el componente que se va a renderizar
export default function Providers({children}) {
    return (
        //SessionProvider es un componente que permite acceder a la sesión de usuario en cualquier parte de la aplicación. Este engloba todos los los children que se renderizan en la aplicación
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

