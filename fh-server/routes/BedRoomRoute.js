const express = require('express')
const router = express.Router();
const BedRooms = require('../models/BedRoomsModel')

router.get('/count', async (req, res) => {
    try {
        const count = await BedRooms.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const bedrooms = await BedRooms.find()
        return res.status(200).json(bedrooms)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newbedroom = new BedRooms(req.body)
        const { title, img, price, delivery_time, offer } = newbedroom
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newbedroom.save()
        return res.status(200).json(newbedroom)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingbedroom = await BedRooms.findOne({ _id: id })
        if (!existingbedroom) {
            return res.status(404).json({ message: "BedRoom furniture not found" })
        }
        const updatedbedroom = await BedRooms.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedbedroom)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingbedroom = await BedRooms.findOne({ _id: id })
        if (!existingbedroom) {
            res.status(404).json({ message: "BedRoom Furniture not found" })
        }
        await BedRooms.findByIdAndDelete(id)
        return res.status(200).json({ message: "BedRoom Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router