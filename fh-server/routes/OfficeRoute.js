const express = require('express')
const router = express.Router();
const Offices = require('../models/OfficesModel')

router.get('/count', async (req, res) => {
    try {
        const count = await Offices.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const offices = await Offices.find()
        return res.status(200).json(offices)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newoffice = new Offices(req.body)
        const { title, img, price, delivery_time, offer } = newoffice
        if (!title || !img || !price || !delivery_time || !offer) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newoffice.save()
        return res.status(200).json(newoffice)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingoffice = await Offices.findOne({ _id: id })
        if (!existingoffice) {
            return res.status(404).json({ message: "Office furniture not found" })
        }
        const updatedoffice = await Offices.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedoffice)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingoffice = await Offices.findOne({ _id: id })
        if (!existingoffice) {
            res.status(404).json({ message: "Office Furniture not found" })
        }
        await Offices.findByIdAndDelete(id)
        return res.status(200).json({ message: "Office Furniture Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router