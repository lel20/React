import { NextResponse } from "next/server";
import User from "@/models/users";
import bcrypt from "bcrypt";
import { mongodbConection } from "@/libs/mongodbConection";

export async function POST(request) {
  await mongodbConection();
  const { first_name, last_name, email, password, password2 } = await request.json();
  if (password != password2)
    return NextResponse.json(
      { message: "Las contraseñas no coinciden" },
      { status: 400 });
  try {
    const user_find = await User.findOne({ email });
    if (user_find)
      return NextResponse.json({ message: "El usuario con este email ya existente!!" }, {
        status: 400
      });
    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashPassword

    });
    await user.save();
    return NextResponse.json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
