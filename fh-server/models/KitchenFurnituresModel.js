const mongoose = require('mongoose')

const KitchenFurnituresSchema = new mongoose.Schema({
    title: { // Property/Filed title
        type: String, // Data type of the Property
        required: true // Nullable(false) or NotNullable(true) 
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        // unique:true
    },
    delivery_time:{
        type: Number,
        required:true,
    },
    offer:{
        type:Number,
        required:true,
    }
})

const KitchenFurnitures = mongoose.model("KitchenFurnitures", KitchenFurnituresSchema)

module.exports = KitchenFurnitures