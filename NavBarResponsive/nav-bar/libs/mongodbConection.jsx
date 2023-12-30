import { connect } from "mongoose";
const { MONGODB_URI } = process.env;
if (!MONGODB_URI) {
  throw new Error('MONGODB_URI debe ser defiinido')
}
export async function mongodbConection() {
  try {
    const { connection } = await connect(MONGODB_URI);
    if (connection.readyState == 1) {
      console.log('Conexión exitosa');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log('Fallo de conexión con la base de datos')
    return Promise.reject(false);
  }

};
