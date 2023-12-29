'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
//Componente NavBar queserá exportado en todas las páginas de la aplicación
export default function NavBar() {
    //Se crean 2 constantes que permitan ver los botones activos e inactivos del NavBar 
    const inactiveLink = ' p-3 flex  h-7 justify-center items-center rounded-sm  hover:text-orange-700';
    const activeLink = inactiveLink + ' bg-white text-blue-950';
    const pathname = usePathname();
    return (
        <nav className=' container mx-auto  p-4 flex bg-blue-950 text-white'>
            <div >
                <Link className='flex gap-3' href="/">
                    <img src="" alt="LogoNav" />
                    <p>NavBar</p>
                </Link>
            </div>
            <div className='flex ms-auto'>
                <ul className=' flex gap-3'>
                    <Link className={pathname ==='/' ? activeLink : inactiveLink} href='/'>
                        <li>Home</li>
                    </Link>
                    <Link className={pathname.includes('/productos') ? activeLink : inactiveLink} href='/productos' >
                        <li>Productos</li>
                    </Link>
                    <Link className={pathname.includes('/iniciarsesion') ? activeLink : inactiveLink} href='/iniciarsesion'>
                        <li>Iniciar</li>
                    </Link>
                    <Link className={pathname.includes('/registrarse') ? activeLink : inactiveLink} href='registrarse'>
                        <li>Registarse</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}
