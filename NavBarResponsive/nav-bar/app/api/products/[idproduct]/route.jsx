import { mongodbConection } from '@/libs/mongodbConection';
import Product from '@/models/products';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  await mongodbConection();
  const producto = await Product.findOne({
    codigo: params.idproduct
  });
  return NextResponse.json(producto);
}


export async function PUT(request, { params }) {
  await mongodbConection();
  try {
    const data = await request.json();
    const found_product = await Product.findOneAndUpdate({ codigo: params.idproduct }, data, { new: true });
    if (!found_product) {
      return NextResponse.json({ message: 'El producto no se encuentra registrado' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Producto actualizado corretamente' });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(request, { params }) {
  await mongodbConection();
  try {
    const deletProduct = await Product.findOneAndDelete({ codigo: params.idproduct });
    if (!deletProduct) {
      return NextResponse.json({ message: 'El producto no se encuentra registrado' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}