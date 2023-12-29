import {mongoose,  Schema, models } from "mongoose";
//Se define el esquema o pantilla que va a tener la base de datos
const userGoogleSchema = new Schema({
  email: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  }
}, { timestamps: true }
);
const UserGoogle = models.User || mongoose.model('User_google', userGoogleSchema);

export default UserGoogle;