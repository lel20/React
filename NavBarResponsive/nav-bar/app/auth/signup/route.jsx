import { NextResponse } from "next/server";
import User from "@/models/users";
import bcrypt from "bcrypt";
import { mongodbConection } from "@/libs/mongodbConection";

export async function POST(request) {
  await mongodbConection();
  const { first_name, last_name, email, password, password2 } = await request.json();
  if (password != password2)
    return NextResponse.json(
      { message: "Las contraseñas no son iguales" },
      { status: 400 });
  try {
    const user_find = await User.findOne({ email });
    if (user_find)
      return NextResponse.json({ message: "Usuario existente" }, {
        status: 400
      });
    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashPassword

    });
    const usersave = await user.save();
  console.log(usersave)
  return NextResponse.json({ message: 'signup' });

  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }


  
}
