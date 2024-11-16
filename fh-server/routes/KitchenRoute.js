const express = require('express')
const router = express.Router();
const Kitchens = require('../models/KitchensModel')

router.get('/count', async (req, res) => {
    try {
        const count = await Kitchens.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const kitchens = await Kitchens.find()
        return res.status(200).json(kitchens)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newkitchen = new Kitchens(req.body)
        const { title, img, price, delivery_time, offer } = newkitchen
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newkitchen.save()
        return res.status(200).json(newkitchen)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingkitchen = await Kitchens.findOne({ _id: id })
        if (!existingkitchen) {
            return res.status(404).json({ message: "Kitchen furniture not found" })
        }
        const updatedkitchen = await Kitchens.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedkitchen)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingkitchen = await Kitchens.findOne({ _id: id })
        if (!existingkitchen) {
            res.status(404).json({ message: "Kitchen Furniture not found" })
        }
        await Kitchens.findByIdAndDelete(id)
        return res.status(200).json({ message: "Kitchen Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router