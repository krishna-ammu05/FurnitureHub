const express = require('express')
const router = express.Router();
const OfficeFurnitures = require('../models/OfficeFurnituresModel')
const { validateTokenAdmin } = require('../config/auth')
router.get('/count', validateTokenAdmin, async (req, res) => {
    try {
        const count = await OfficeFurnitures.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const officeFurnitures = await OfficeFurnitures.find()
        return res.status(200).json(officeFurnitures)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', validateTokenAdmin, async (req, res) => {
    try {
        const newofficeFurniture = new OfficeFurnitures(req.body)
        const { title, img, price, delivery_time, offer } = newofficeFurniture
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newofficeFurniture.save()
        return res.status(200).json(newofficeFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingofficeFurniture = await OfficeFurnitures.findOne({ _id: id })
        if (!existingofficeFurniture) {
            return res.status(404).json({ message: "Office Furniture not found" })
        }
        const updatedofficeFurniture = await OfficeFurnitures.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedofficeFurniture)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingofficeFurniture = await OfficeFurnitures.findOne({ _id: id })
        if (!existingofficeFurniture) {
            res.status(404).json({ message: "Office Furniture not found" })
        }
        await OfficeFurnitures.findByIdAndDelete(id)
        return res.status(200).json({ message: "Office Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router