//Con NextAuth se podrá hacer tareas como: iniciar o cerrar sesion en una aplicación
import NextAuth from "next-auth"
//Se utilizará el proveedor de Gooogle para la autenticación
import GoogleProvider from "next-auth/providers/google";
//Se crea un objeto donde se configura la autenticación con el proveedor
const authOptions = {
  // Configuración de la autenticaión con el proveedor
  providers: [
    //El proveedor necesita dos valores (parámetros)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    //Agregar más proveedores
  ],
  //También se puede guardar la iformación de la autenticación en una base de datos como MongoDB. En este caso queremos que los datos se guarden después de haber iniciado sesión; por lo que se va a usar un callback
  callbacks: {
    //se crea una funcion asincron que recibe dos paramestros:
    //user: contiene la información de la cuenta del usuario (email y nombre) ; y
    //accont: contiene iformación del tipo de provedor que se va a utilizar
    async signIn({ user, account }) {
      //Comprovamos si el provedor con el que estamos intentado autenticarnos es google
      if (account.provider === 'google') {
        //Si es cierto, creamos 2 constantes para almacenar el email y name, de user. Estos valores seran enviados a la base de datos mediante la función fetch()
        const { email, name } = user
        //Para aseguar que se ejecute todo esto, es necesario utilizar la declaraión try..catch. Con esto nos aseguramos de ver si se generan errores caundo no se ejecuta un bloque de código
        try {
          //Para utilizar fetch es necesario hacer unas configuraciones
          const configuration = {
            //Método a usar
            method: 'POST',
            //se especifican lo encabezados
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            //Se define el cuerpo que se va a enviar, es decir en email y name, que son las constantes que se declararon anteriormente
            body: JSON.stringify({
              email,
              name,
            })
          };
          // Ahora, es momento de usar fetch() que recibe dos valores: una url (de donde se rescatan los datos) y la configuración que definimos)
          const res = await fetch('http://localhost:3000/api/user', configuration)
          if (res.ok) {
            return user;
          }
        } catch (error) {
          console.log(error)
        }
      }
      return user;
    }
  }
}
//Se ejecuta el metodo de autenticación que recibe la configuracion del proveedor
const proveedor = NextAuth(authOptions)
//Se exporta la configuración como una petición GET y POST
export { proveedor as GET, proveedor as POST }