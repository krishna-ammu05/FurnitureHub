const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
const db = require('./config/db')
const kitchens = require('./routes/KitchenRoute')
const livingRooms = require('./routes/LivingRoomRoute')
const bedRooms = require('./routes/BedRoomRoute')
const office = require('./routes/OfficeRoute')
const outdoor = require('./routes/OutdoorRoute')
const Users = require('./routes/UserRoute')
const Orders = require('./routes/OrderRoute')
const Auth = require('./routes/AuthRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/kitchens', kitchens)
app.use('/livingRooms', livingRooms)
app.use('/bedRooms', bedRooms)
app.use('/office', office)
app.use('/outdoor', outdoor)
app.use('/users', Users)
app.use('/orders', Orders)
app.use('/auth', Auth)

app.listen(port, (() => console.log(`Listening on ${port}`)))