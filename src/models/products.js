const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductsSchemas = new Schema({
    id:{
        type: Schema.Types.ObjectId
    },
    name:{
        type: String,
        required: true,
        maxlenght: 30
    },
    price:{
        type: Number,
        min: 1,
        required: true
    },
    stock:{
        type: Number,
        min: 0,
        required: true,
    },
    description:{
        type: String,
        maxlenght: 100,
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Products", ProductsSchemas);