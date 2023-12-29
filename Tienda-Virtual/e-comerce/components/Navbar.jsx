'use client'
import Link from "next/link";
import Enlaces from "./enlaces/Enlaces";
import { useSession, signOut } from "next-auth/react";
// Se crea el componente para la barra de navegación; y se lo exporta para ser utilizado
export default function Navbar() {
  const { data: session } = useSession()
  return (
    <div className="mt-5 flex justify-between p-4 items-center shadow-md">
      <Link className="font-bold text-lg text-violet-950" href={'/'}> TVirtual</Link>
      <div className=" flex gap-2 justify-center items-center">
        {/* Si el usuario ha iniciado sesión */}
        {session ? (
          <>
            <p>{session.user.name}</p>
            <button onClick={() => signOut()} className="rounded-md w-24 h-8 hover:text-fuchsia-600 cursor-pointer">
              Salir
            </button>
          </>
          // Si el usuario no ha iniciado sesión
        ) : (
          <>
            <Enlaces link={'/signin'} texto='Iniciar' />
            <Enlaces link={'/signup'} texto='Registrarse' />
          </>
        )}
      </div>
    </div>
  );
}
