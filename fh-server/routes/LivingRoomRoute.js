const express = require('express')
const router = express.Router();
const LivingRooms = require('../models/LivingRoomsModel')

router.get('/count', async (req, res) => {
    try {
        const count = await LivingRooms.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const livingRooms = await LivingRooms.find()
        return res.status(200).json(livingRooms)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newlivingRoom = new LivingRooms(req.body)
        const { title, img, price, delivery_time, offer } = newlivingRoom
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newlivingRoom.save()
        return res.status(200).json(newlivingRoom)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existinglivingRoom = await LivingRooms.findOne({ _id: id })
        if (!existinglivingRoom) {
            return res.status(404).json({ message: "LivingRoom furniture not found" })
        }
        const updatedlivingRoom = await LivingRooms.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedlivingRoom)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existinglivingRoom = await LivingRooms.findOne({ _id: id })
        if (!existinglivingRoom) {
            res.status(404).json({ message: "LivingRoom Furniture not found" })
        }
        await LivingRooms.findByIdAndDelete(id)
        return res.status(200).json({ message: "LivingRoom Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router