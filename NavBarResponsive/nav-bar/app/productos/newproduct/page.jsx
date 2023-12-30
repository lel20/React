import Image from 'next/image'
export default function page() {
    return (
        <div className=" w-4/5 m-auto p-3">
            <form className="bg-white shadow-md rounded gap-3 px-8 pt-6 pb-8 mb-4 flex" >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameProduct">
                        Nombre del Producto
                    </label>
                    <input className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
                        id="nameProduct"
                        type="text"
                        placeholder="Nombre del Producto"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameProduct">
                        Precio
                    </label>
                    <input className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
                        id="nameProduct"
                        type="text"
                        placeholder="Precio"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descriptionProduct">
                        Descripción del Producto
                    </label>
                    <textarea className="border rounded py-2 px-2 focus:outline-none focus:shadow-lg w-full h-56"
                        id="descriptionProduct"
                        type="text"
                        placeholder="Descripción"
                    ></textarea>
                    <button
                        className='bg-blue-600 w-full p-3 rounded text-white'>
                        Guardar
                    </button>
                </div>
                <Image className=' m-auto'
                    loader={""}
                    src="/vercel.svg"
                    width={300}
                    height={300}
                    alt="ImageProduct"
                />

            </form>
        </div>
    );
}
