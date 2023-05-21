const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
    id:String,
    image: String,
    title:Object,
    price:Number,
    description: String,
    quantity: Number,
    rating: String,
   
});

const Products =  new mongoose.model("products", productsSchema);
module.exports = Products;