import { mongodbConection } from '@/libs/mongodbConection';
import { NextResponse } from 'next/server';
import Product from '@/models/products';
export async function GET() {
  //Se conecta a la base de datos
  await mongodbConection();
  //try...catch para manejar errores
  try {
    //Se obtienen los productos de la base de datos
    const products = await Product.find();
    //Si no hay productos registrados se envía un mensaje de error
    if (!products)
      return NextResponse.json({ message: 'No hay productos registrados' }, { status: 400 });
    // si hay productos registrados se envían los productos
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
export async function POST(request) {
  //Se conecta a la base de datos
  await mongodbConection();
  //Se obtienen los datos del formulario enviados desde el cliente
  const { codigo, nameProduct, price, description } = await request.json();
  //try...catch para manejar errores
  try {
    //Se busca el producto por el código en la base de datos
    const found_product = await Product.findOne({ codigo });
    //Si el producto ya existe se envía de que ya existe
    if (found_product) {
      return NextResponse.json({ message: 'El producto ya se encuentra registrado' }, { status: 400 });
    }
    const new_product = new Product({
      codigo: codigo,
      nameProduct: nameProduct,
      price: price,
      description: description
    });
    await new_product.save();
    return NextResponse.json({ message: 'Producto registrado corretamente' });
  } catch (error) {
    return NextResponse.error();
  }
}

