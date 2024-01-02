import { mongodbConection } from "@/libs/mongodbConection";
import NextAuth from "next-auth";
import User from "@/models/users";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

//Se crea una constante que contiene la configuración de next-auth para el proveedor de credenciales. Next-auth recibe como parametro un objeto con la configuración del proveedor de credenciales

const handler = NextAuth({
  //Se expecifica el nombre de los proveedores de autenticación
  providers: [
    //Se configura el proveedor de credenciales escogido
    CredentialsProvider({
      //Se le asigna un nombre al proveedor de credenciales
      name: "credentials",

      async authorize(credentials, req) {
        await mongodbConection();
        //Se busca el usuario por email y si este coincide con el email ingresado se rescata el usuario 
        const userFound = await User.findOne({ email: credentials.email }).select("+password");
        //Si el usuario no existe se lanza un error
        if (!userFound)
          throw new Error("Credenciales incorrectas");
        //Se compara la contraseña ingresada con la contraseña del usuario encontrado
        const passwordUser = await bcrypt.compare(credentials.password, userFound.password);
        //Si las contraseñas no coinciden se lanza un error
        if (!passwordUser)
          throw new Error("Credenciales incorrectas");
        return userFound;

      }
    })
  ],
  callbacks: {
    // con jwt se crea un token con la información del usuario
    jwt({ token, user }) {
      // Si el usuario existe
      if (user)
        //Se crea un token con la información del usuario
        token.user = user;
      //Luego se retorna el token
      return token
    },
    //Se crea una sesión con la información del token
    session({ session, token }) {
      if (token?.user)
        session.user = token.user;
      return session
    }
  },
  pages: {
    signIn: '/signin',
  }
});
export { handler as GET, handler as POST }

