const express = require('express')
const router = express.Router();
const KitchenFurnitures = require('../models/KitchenFurnituresModel')
const { validateTokenAdmin } = require('../config/auth')
router.get('/count', validateTokenAdmin, async (req, res) => {
    try {
        const count = await KitchenFurnitures.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const kitchenFurnitures = await KitchenFurnitures.find()
        return res.status(200).json(kitchenFurnitures)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', validateTokenAdmin, async (req, res) => {
    try {
        const newkitchenFurniture = new KitchenFurnitures(req.body)
        const { title, img, price, delivery_time, offer } = newkitchenFurniture
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newkitchenFurniture.save()
        return res.status(200).json(newkitchenFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingkitchenFurniture = await KitchenFurnitures.findOne({ _id: id })
        if (!existingkitchenFurniture) {
            return res.status(404).json({ message: "Kitchen Furniture not found" })
        }
        const updatedkitchenFurniture = await KitchenFurnitures.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedkitchenFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingkitchenFurniture = await KitchenFurnitures.findOne({ _id: id })
        if (!existingkitchenFurniture) {
            res.status(404).json({ message: "Kitchen Furniture not found" })
        }
        await KitchenFurnitures.findByIdAndDelete(id)
        return res.status(200).json({ message: "Kitchen Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router