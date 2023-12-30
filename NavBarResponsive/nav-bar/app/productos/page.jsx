import CardProdut from "@/components/productos/CardProdut";
import { Noto_Sans } from 'next/font/google'
import Link from "next/link";
const noto_sans = Noto_Sans({
  weight: ["100"],
  style: ["normal"],
  subsets: ["latin"]

});
export default function page() {

  return (
    <div className=" container flex flex-col mx-auto gap-2">
      <Link
        href='/productos/newproduct'
        className={noto_sans.className + " mt-3 flex  justify-center items-center bg-blue-500 w-48 h-8 text-white rounded-full"}
        type="button">+ Nuevo Producto
      </Link>
      <div className="flex gap-3">
        <CardProdut />
        <CardProdut />
      </div>

    </div>

  );
}
