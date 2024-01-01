'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
export default function LoginPage() {
  //Estado para controlar los errores que se pueden egnerar en la pagina web
  const [error, setError] = useState(null);
  const router = useRouter();
  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    });
    if (res.error)
      return setError(res.error);
    console.log(res);
    // if (res.ok){
    //   return router.push('/');
    // }
  }
  return (
    <div className="container mx-auto flex justify-center">
      <form onSubmit={onSubmit} className="shadow-xl border-separate px-4 rounded w-2/5 mt-4">
        {error && <div className='bg-red-600 text-white p-3 rounded mb-2 text-center'>
          {error}
        </div>}
        <div className="mb-4">
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
        </div>

        <div className="mb-3 flex justify-center">
          <button className='bg-blue-600 rounded py-2 text-white w-full' > Iniciar Sesión</button>
        </div>

      </form>
    </div>
  );
}
