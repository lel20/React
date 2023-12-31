'use client'
import React from 'react'
export default function Page() {
  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    try {
      const formData = new FormData(event.currentTarget);
      const first_name = formData.get('first_name');
      const last_name= formData.get('last_name');
      const email= formData.get('email');
      const password = formData.get('password');
      const password2 = formData.get('password2');
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
          first_name,
          last_name,
          email,
          password,
          password2
        })
      };

      const response = await fetch('/auth/signup', configuration)
      if (!response.ok) {
        throw new Error('Fallo al registrar los datos. Por favor, intentelo de nuevo.')
      }

      // Handle response if necessary
      const data = await response.json()
      // ...

    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    
    }
  }
  return (
    <div className="container mx-auto flex justify-center">
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={onSubmit} className="shadow-xl border-separate px-4 rounded w-2/5 mt-4">
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
