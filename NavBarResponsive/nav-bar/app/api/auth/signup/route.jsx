import { NextResponse } from "next/server";
import User from "@/models/users";
import bcrypt from "bcrypt";
import { mongodbConection } from "@/libs/mongodbConection";
//Meto POST para registrar un usuario
export async function POST(request) {
  //Se conecta a la base de datos
  await mongodbConection();
  //Se obtienen los datos del formulario enviados desde el cliente
  const { first_name, last_name, email, password, password2 } = await request.json();
  //Se verifica que las contraseñas coincidan
  if (password != password2)
  //Si las contraseñas no coinciden se envía un mensaje de error
    return NextResponse.json(
      { message: "Las contraseñas no coinciden" },
      { status: 400 });
  try {
    //Se verifica que el email no esté registrado
    const user_find = await User.findOne({ email });
    //Si el email ya está registrado se envía un mensaje de error
    if (user_find)
      return NextResponse.json({ message: "El usuario con este email ya existente!!" }, {
        status: 400
      });
    //Se encripta la contraseña con un hash de 12 caracteres
    const hashPassword = await bcrypt.hash(password, 12);
    //Se crea un nuevo usuario con los datos del formulario
    const user = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashPassword

    });
    //Se guarda el usuario en la base de datos
    await user.save();
    //Se envía un mensaje de éxito
    return NextResponse.json({ message: 'Usuario registrado correctamente' });
    //Si ocurre un error se envía un mensaje de error
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
