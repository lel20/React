import Image from 'next/image'
import { signIn } from 'next-auth/react'
export default function Boton({ texto, imagen, nombre_imagen }) {
  return (
    <div className=" h-12 w-fulls flex mt-4 rounded-md border-2">
      <button
        onClick={() => signIn()}
        className=" text-center flex justify-around items-center hover:bg-slate-300 h-full w-full" type="button"> 
        <Image src={imagen} alt={nombre_imagen} height={30} width={30} />
        {texto}
      </button>
    </div>
  );
}
