const express = require('express')
const router = express.Router();
const Outdoors = require('../models/OutdoorsModel')

router.get('/count', async (req, res) => {
    try {
        const count = await Outdoors.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const outdoors = await Outdoors.find()
        return res.status(200).json(outdoors)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newoutdoor = new Outdoors(req.body)
        const { title, img, price, delivery_time, offer } = newoutdoor
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newoutdoor.save()
        return res.status(200).json(newoutdoor)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingoutdoor = await Outdoors.findOne({ _id: id })
        if (!existingoutdoor) {
            return res.status(404).json({ message: "Outdoor furniture not found" })
        }
        const updatedoutdoor = await Outdoors.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedoutdoor)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingoutdoor = await Outdoors.findOne({ _id: id })
        if (!existingoutdoor) {
            res.status(404).json({ message: "Outdoor Furniture not found" })
        }
        await Outdoors.findByIdAndDelete(id)
        return res.status(200).json({ message: "Outdoor Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router