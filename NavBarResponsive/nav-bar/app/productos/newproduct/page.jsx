'use client'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, ChangeEvent } from 'react'
export default function page() {
  // const [noConfirmProduct, setNoConfirmProduct] = useState(null)
  // const [confirmProduct, setConfirmProduct] = useState(null)
  // const router = useRouter();
  // async function  newProduct (event) {
  //   event.preventDefault();
  //   const forData = new FormData(event.currentTarget)
  //   try {
  //     const res = await axios.post('/api/products', {
  //       codigo: forData.get('codigo'),
  //       nameProduct: forData.get('nameProduct'),
  //       price: forData.get('price'),
  //       description: forData.get('descriptionProduct')
  //     })
  //     if (res.statusText === 'OK')
  //       setConfirmProduct(res.data.message)
  //       setNoConfirmProduct(null)
  //       return router.push('/productos')



  //   } catch (error) {
  //     if(error instanceof AxiosError)
  //       setNoConfirmProduct(error.response.data.message)
  //       setConfirmProduct(null)
  //   }


  // }
  const router = useRouter();
  const [noConfirmProduct, setNoConfirmProduct] = useState(null);
  const [confirmProduct, setConfirmProduct] = useState(null);
  // se crea un estado que almacena los datos del producto
  const [newProduct, setNewProduct] = useState({
    codigo: 0,
    nameProduct: "",
    price: 0,
    description: "",
  });
  // se crea una función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/api/products', newProduct)
      console.log(res);
      if (res.statusText === 'OK')
        setConfirmProduct(res.data.message)
        setNoConfirmProduct(null)
      router.push('/productos')
      return router.refresh();

    } catch (error) {
      if (error instanceof AxiosError)
        setNoConfirmProduct(error.response.data.message)
        setConfirmProduct(null)
    }


  }
  // se crea una función para manejar los cambios en los inputs, la cual recibe el evento
  const handleChange = (event) => setNewProduct({
    // se crea un nuevo objeto con los datos del producto y se le asigna el valor del input
    ...newProduct, [event.target.name]: event.target.value
  });
  return (
    <div className=" w-4/5 m-auto p-3">
      {noConfirmProduct && <div className="bg-red-500 text-white text-center p-3 rounded">{noConfirmProduct}</div> }
      {confirmProduct && <div className="bg-green-500 text-white text-center p-3 rounded">{confirmProduct}</div> }
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded gap-3 px-8 pt-6 pb-8 mb-4 flex" >

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigo">
            Código
          </label>
          <input className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="codigo"
            id="codigo"
            type="number"
            placeholder="codigo"
            onChange={handleChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameProduct">
            Nombre del Producto
          </label>
          <input className="border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="nameProduct"
            id="nameProduct"
            type="text"
            placeholder="Nombre del Producto"
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descripción del Producto
          </label>
          <textarea className="border rounded py-2 px-2 focus:outline-none focus:shadow-lg w-full h-56"
            name="description"
            id="description"
            type="text"
            placeholder="Descripción"
            onChange={handleChange}
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
