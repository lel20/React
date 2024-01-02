import { Schema, model, models } from "mongoose";
const schema_Products= new Schema({
    nameProduct:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        required:true
    }
})
const Produt= models.Product || model('Product', schema_Products);
export default Produt;