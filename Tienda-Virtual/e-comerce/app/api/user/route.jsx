import { connectMongoDB } from "@/lib/mongodb"
import UserGoogle from "@/models/users_google";
import { NextResponse } from "next/server";
export async function POST(request){
    const{email,name}=await request.json();
    await connectMongoDB();
    await UserGoogle.create({email, name});
    return NextResponse.json({message:"Usuario Registrado"},{ status:201});
}
