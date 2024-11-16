const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://nagasonali5676:vara6759@in-aws.efmdc.mongodb.net/furniturehub?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')