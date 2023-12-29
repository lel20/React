import { Inter } from 'next/font/google'
import './globals.css'
// Se importa el componente de navegacion
import Navbar from '../components/Navbar'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TVirtual',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <html lang="es">
      <body className={inter.className}>
        {/* se establece un ancho máximo de 80rem (1280px) */}
        {/* mx-auto permite centrar todo estable margenes automáticos */}
        <Providers>
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            {children}
          </div>
        </Providers>
          


      

      </body>
    </html>
  )
}
