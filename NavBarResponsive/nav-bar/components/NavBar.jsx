'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from "next-auth/react";

//Componente NavBar queserá exportado en todas las páginas de la aplicación
export default function NavBar() {
  //Se obtiene la sesión del usuario
  const { data: session } = useSession();
  //Se define el estilo inactivo de los botones del navbar 
  const inactiveLink = ' p-3 flex  h-7 justify-center items-center rounded-sm  hover:text-orange-700';
  //Se define el estilo activo de los botones del navbar
  const activeLink = inactiveLink + ' bg-white text-blue-950';
  //Se obtiene la ruta actual para saber que botón del navbar debe estar activo
  const pathname = usePathname();
  return (
    <nav className=' container mx-auto  p-4 flex bg-blue-950 text-white'>
      <div >
        <Link className='flex gap-3' href="/">
          <img src="" alt="LogoNav" />
          <p>E-chomerce</p>
        </Link>
      </div>
      <div className='flex ms-auto'>
        <ul className=' flex gap-3'>
          {session ?
            (<>
              <Link className={pathname === '/' ? activeLink : inactiveLink} href='/'>
                <li>Home</li>
              </Link>
              <Link className={pathname.includes('/productos') ? activeLink : inactiveLink} href='/productos' >
                <li>Productos</li>
              </Link>
              <p>{session.user.first_name}</p>
              <button
                onClick={() => signOut()}>
                Salir
              </button>
            </>) :
            (<>
              <Link className={pathname === '/' ? activeLink : inactiveLink} href='/'>
                <li>Home</li>
              </Link>
              <Link className={pathname.includes('/signin') ? activeLink : inactiveLink} href='/signin'>
                <li>Iniciar</li>
              </Link>
              <Link className={pathname.includes('/signup') ? activeLink : inactiveLink} href='signup'>
                <li>Registarse</li>
              </Link>
            </>)
          }

        </ul>
      </div>
    </nav>
  );
}
