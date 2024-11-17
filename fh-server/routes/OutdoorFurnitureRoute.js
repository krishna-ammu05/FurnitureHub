const express = require('express')
const router = express.Router();
const OutdoorFurnitures = require('../models/OutdoorFurnituresModel')

router.get('/count', async (req, res) => {
    try {
        const count = await OutdooFurniturers.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const outdoorFurnitures = await OutdoorFurnitures.find()
        return res.status(200).json(outdoorFurnitures)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newoutdoorFurniture = new OutdoorFurnitures(req.body)
        const { title, img, price, delivery_time, offer } = newoutdoorFurniture
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newoutdoorFurniture.save()
        return res.status(200).json(newoutdoorFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingoutdoorFurniture = await OutdoorFurnitures.findOne({ _id: id })
        if (!existingoutdoorFurniture) {
            return res.status(404).json({ message: "Outdoor Furniture not found" })
        }
        const updatedoutdoorFurniture = await OutdoorFurnitures.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedoutdoorFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingoutdoorFurniture = await OutdoorFurnitures.findOne({ _id: id })
        if (!existingoutdoorFurniture) {
            res.status(404).json({ message: "Outdoor Furniture not found" })
        }
        await OutdoorFurnitures.findByIdAndDelete(id)
        return res.status(200).json({ message: "Outdoor Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router