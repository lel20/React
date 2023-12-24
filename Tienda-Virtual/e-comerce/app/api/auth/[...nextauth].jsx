//Permite agregar una autenticación de forma segura
import NextAuth from "next-auth"
//Provedor que se utiliza para la autenticación
import GoogleProvider from "next-auth/providers/google";
//Se crea un objeto donde se configura la autenticación con el proveedor
const authOptions = {
    // Configuración de la autenticaión con el proveedor
    providers: [
        //El proveedor necesita dos valores (parámetros)
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    //Agregar más proveedores 
}
//Se ejecuta el metodo de autenticación querecibe la configuracion del proveedor
const proveedor= NextAuth(authOptions)
//Se exporta la configuración como una petición GET y POST
export {proveedor as GET, proveedor as POST}