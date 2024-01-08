

export default function editProdut() {

  function editProduct(event) {
    event.preventDefault();
    const forData = new FormData(event.currentTarget)
    console.log(forData.get('nameProduct'));
  }

  return (
    <div className=" w-4/5 m-auto p-3">
      <form  className="bg-white shadow-md rounded gap-3 px-8 pt-6 pb-8 mb-4 flex" >
        <div className="mb-4">
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
