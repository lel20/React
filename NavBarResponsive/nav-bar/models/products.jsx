import { Schema, model, models } from "mongoose";
const schema_Products = new Schema({
    codigo: {
        type: Number,
        require: true
    },
    nameProduct: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        required: true
    }
})
const Product = models.Products || model('Products', schema_Products);
export default Product;