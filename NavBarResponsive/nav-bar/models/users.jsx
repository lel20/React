import { Schema, model, models } from "mongoose";

const schema_User = new Schema({
  first_name: String,
  last_name: Strinf,
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
    select: false
  }
})
//Si models.User ya existe (Utilízalo) caso contrario crea un nuevo modelo 
const User= models.User || model('User', schema_User);
export default User;