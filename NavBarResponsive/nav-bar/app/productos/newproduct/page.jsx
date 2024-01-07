'use client'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function page() {
  const [noConfirmProduct, setNoConfirmProduct] = useState(null)
  const [confirmProduct, setConfirmProduct] = useState(null)
  const router = useRouter();
  async function  newProduct (event) {
    event.preventDefault();
    const forData = new FormData(event.currentTarget)
    try {
      const res = await axios.post('/api/products', {
        codigo: forData.get('codigo'),
        nameProduct: forData.get('nameProduct'),
        price: forData.get('price'),
        description: forData.get('descriptionProduct')
      })
      if (res.statusText === 'OK')
        setConfirmProduct(res.data.message)
        setNoConfirmProduct(null)
        return router.push('/productos') 
      
    } catch (error) {
      if(error instanceof AxiosError)
        setNoConfirmProduct(error.response.data.message)
        setConfirmProduct(null)
    }
   
    
  }

  return (
    <div className=" w-4/5 m-auto p-3">
      {noConfirmProduct && <div className="bg-red-500 text-white text-center p-3 rounded">{noConfirmProduct}</div> }
      {confirmProduct && <div className="bg-green-500 text-white text-center p-3 rounded">{confirmProduct}</div> }
      <form onSubmit={newProduct} className="bg-white shadow-md rounded gap-3 px-8 pt-6 pb-8 mb-4 flex" >

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigo">
            Código
          </label>
          <input className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="codigo"
            id="codigo"
            type="number"
            placeholder="codigo"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameProduct">
            Nombre del Producto
          </label>
          <input className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="nameProduct"
            id="nameProduct"
            type="text"
            placeholder="Nombre del Producto"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Precio
          </label>
          <input className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            step="any"
            name="price"
            id="price"
            type="number"
            placeholder="Precio"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descriptionProduct">
            Descripción del Producto
          </label>
          <textarea className="border rounded py-2 px-2 focus:outline-none focus:shadow-lg w-full h-56"
            name="descriptionProduct"
            id="descriptionProduct"
            type="text"
            placeholder="Descripción"
          ></textarea>
          <button
            className='bg-blue-600 w-full p-3 rounded text-white'>
            Guardar
          </button>
        </div>
        <div>
          <input type="file" className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg" />
        </div>

      </form>
    </div>
  );
}
