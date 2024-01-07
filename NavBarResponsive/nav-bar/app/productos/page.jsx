
import CardProdut from "@/components/productos/CardProdut";
import { Noto_Sans } from 'next/font/google'
import Link from "next/link";
import axios, { AxiosError } from 'axios';
const noto_sans = Noto_Sans({
  weight: ["100"],
  style: ["normal"],
  subsets: ["latin"]
});
const productos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function page() {
  const datos = await productos();
  return (
    <div className=" container flex flex-col mx-auto gap-2">
      <Link
        href='/productos/newproduct'
        className={noto_sans.className + " mt-3 flex  justify-center items-center bg-blue-500 w-48 h-8 text-white rounded-full"}
        type="button">+ Nuevo Producto
      </Link>
      <div className="flex gap-3">
        {datos.map((dato) => (
          <CardProdut
            task={dato}
            key={dato._id}
          />
        ))}
      </div>
    </div>
  );
}
export default page;