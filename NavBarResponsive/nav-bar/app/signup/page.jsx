'use client'
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
export default function Page() {
  //Estado para controlar los errores que se pueden egnerar en la página web
  const [error, setError] = useState(null);
  //Se obtiene el router para poder redireccionar a la página de inicio
  const router = useRouter();
  //Función que se ejecuta cuando se envía el formulario
  async function onSubmit(event) {
    //Se evita que se recargue la página
    event.preventDefault()
    //Se obtienen los datos del formulario
    const formData = new FormData(event.currentTarget);
    try {
      //Se envían los datos al servidor a través de una petición POST
      const res = await axios.post('/api/auth/signup', {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password2: formData.get('password2'),
      });
      // const res = await signIn('credentials', {
      //   email: signinResponse.data.email,
      //   password: formData.get('password'),
      //   redirect: false
      // });
      //Se verifica que la petición haya sido exitosa
      if (res.statusText == 'OK'){
        // si lo fue se redirecciona a la página de inicio
        return router.push('/');
      }
      //Si no lo fue se muestra el error
    } catch (error) {
      //Se verifica que el error sea de tipo AxiosError
      if (error instanceof AxiosError) {
        //setError almacena el mensaje de error que envía el servidor para que el usuario pueda verlo
        setError(error.response.data.message)
      }
    }
  }
  //Se retorna el formulario de registro
  return (
    <div className="container mx-auto flex justify-center">
      <form onSubmit={onSubmit} className="shadow-xl border-separate px-4 rounded w-2/5 mt-4">
      {/*Se verifica si hay un error para mostrarlo */}
        {error && <div className='bg-red-600 text-white p-3 rounded mb-2 text-center'>
          {error}
        </div>}
        <div className="mb-4">
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="first_name"
            id="first_name"
            type="text"
            placeholder="Ingrese su nombre"
            required
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="last_name"
            id="last_name"
            type="text"
            placeholder="Ingrese sus apellidos"
            required
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="email"
            id="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
            required
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="password"
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            required
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="password2"
            id="password2"
            type="password"
            placeholder="Repita su contraseña"
            required
          />
        </div>

        <div className="mb-3 flex justify-center">
          <button className='bg-blue-600 rounded py-2 text-white w-full' > Registrarse</button>
        </div>

      </form>
    </div>
  );
}
