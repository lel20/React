import mongoose from "mongoose";
export const connectMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conección a Mongo exitosa")

    }catch(error){
        console.log("Error de conección", error)

    }
}
