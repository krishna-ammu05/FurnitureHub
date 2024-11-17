const express = require('express')
const router = express.Router();
const LivingRoomFurnitures = require('../models/LivingRoomFurnituresModel')

router.get('/count', async (req, res) => {
    try {
        const count = await LivingRoomFurnitures.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const livingRoomFurnitures = await LivingRoomFurnitures.find()
        return res.status(200).json(livingRoomFurnitures)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newlivingRoomFurniture = new LivingRoomFurnitures(req.body)
        const { title, img, price, delivery_time, offer } = newlivingRoomFurniture
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newlivingRoomFurniture.save()
        return res.status(200).json(newlivingRoomFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existinglivingRoomFurniture = await LivingRoomFurnitures.findOne({ _id: id })
        if (!existinglivingRoomFurniture) {
            return res.status(404).json({ message: "LivingRoom Furniture not found" })
        }
        const updatedlivingRoomFurniture = await LivingRoomFurnitures.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedlivingRoomFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existinglivingRoomFurniture = await LivingRoomFurnitures.findOne({ _id: id })
        if (!existinglivingRoomFurniture) {
            res.status(404).json({ message: "LivingRoom Furniture not found" })
        }
        await LivingRoomFurnitures.findByIdAndDelete(id)
        return res.status(200).json({ message: "LivingRoom Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router