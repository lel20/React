'use client'
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
export default function Page() {
  //Estado para controlar los errores que se pueden egnerar en la pagina web
  const [error, setError] = useState(null);
  const router = useRouter();
  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    try {
      const signinResponse = await axios.post('/api/auth/signup', {
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
      console.log(signinResponse.statusText);
      if (signinResponse.statusText == 'OK'){
        console.log(signinResponse);
        return router.push('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response.data.message)
      }
    }
  }
  return (
    <div className="container mx-auto flex justify-center">
      <form onSubmit={onSubmit} className="shadow-xl border-separate px-4 rounded w-2/5 mt-4">
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
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="email"
            id="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="password"
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="password2"
            id="password2"
            type="password"
            placeholder="Repita su contraseña"
          />
        </div>

        <div className="mb-3 flex justify-center">
          <button className='bg-blue-600 rounded py-2 text-white w-full' > Registrarse</button>
        </div>

      </form>
    </div>
  );
}
