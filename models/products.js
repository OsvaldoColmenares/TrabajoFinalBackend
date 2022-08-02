const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    id:{
        type: Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true        
    },
    precio:{
        type: Number,
        required:true
    } 
})

const Product = mongoose.model('Product', storeSchema) 
module.exports = {Product};