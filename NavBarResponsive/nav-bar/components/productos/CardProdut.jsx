'use client'
import Image from 'next/image'
import { Botons } from './Botons';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function CardProdut({ task }) {
    const router = useRouter();
    const deleteProduct = async (event) => {
        console.log(task.codigo);
        const deleteProduct = await axios.delete(`/api/products/${task.codigo}`);
        console.log(deleteProduct);
        router.refresh();

    }
    return (
        <div className="bg-slate-200 max-w-sm rounded  shadow-lg mt-3">
            <Image
                src="/next.svg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{task.nameProduct}</div>
                <p className="text-gray-700 text-base">
                    {task.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center gap-4">
                
                <button onClick={deleteProduct} className="bg-red-500 py-1 px-2  text-white text-center rounded"> Borrar</button>
            </div>
        </div>
    );
}
