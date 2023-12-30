import Image from 'next/image'
import { Botons } from './Botons';
export default function CardProdut() {
    return (
        <div className="bg-slate-200 max-w-sm rounded overflow-hidden shadow-lg mt-3">
            <Image
                src="/next.svg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center gap-4">
                <Botons
                    bg="bg-green-500"
                    name="Editar"
                    link="/productos/editproduct"
                />
                <Botons
                    bg ="bg-red-500"
                    name="Borar"
                    link="/productos/editproduct"
                />
            </div>
        </div>
    );
}