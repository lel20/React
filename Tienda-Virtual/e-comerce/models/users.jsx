const { Schema, models, mongoose } = require("mongoose");
const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    requires: true
  },
},
  { timestamps: true }
);
const User= models.User || mongoose.models('Usuarios',userSchema)
 export default User;