const express = require('express')
const router = express.Router();
const BedRoomFurnitures = require('../models/BedRoomFurnituresModel')

router.get('/count', async (req, res) => {
    try {
        const count = await BedRoomFurnitures.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const bedRoomFurnitures = await BedRoomFurnitures.find()
        return res.status(200).json(bedRoomFurnitures)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newbedRoomFurniture = new BedRoomFurnitures(req.body)
        const { title, img, price, delivery_time, offer } = newbedRoomFurniture
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newbedRoomFurniture.save()
        return res.status(200).json(newbedRoomFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingbedRoomFurniture = await BedRoomFurnitures.findOne({ _id: id })
        if (!existingbedRoomFurniture) {
            return res.status(404).json({ message: "BedRoom Furniture not found" })
        }
        const updatedbedRoomFurniture = await BedRoomFurnitures.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedbedRoomFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingbedRoomFurniture = await BedRoomFurnitures.findOne({ _id: id })
        if (!existingbedRoomFurniture) {
            res.status(404).json({ message: "BedRoom Furniture not found" })
        }
        await BedRoomFurnitures.findByIdAndDelete(id)
        return res.status(200).json({ message: "BedRoom Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router