
import Link from 'next/link'
export default function NavBar() {
    return (
        <nav className=' container mx-auto  p-4 flex bg-black text-white'>
            <div >
                <Link className='flex gap-3' href="/">
                    <img src="" alt="LogoNav" />
                    <p>NavBar</p>
                </Link>
            </div>
            <div className='flex ms-auto'>
                <ul className=' flex gap-3'>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/productos' ><li>Productos</li></Link>
                    <Link href='/iniciarsesion'><li>Iniciar</li></Link>
                    <Link href='registrarse'><li>Registarse</li></Link>
                </ul>
            </div>
        </nav>
    );
}
