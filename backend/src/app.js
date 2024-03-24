const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cartasRoute = require("./routes/cartasRoute")
const cors = require("cors")

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

const db = require("../db/models")

app.use('/cartas', cartasRoute)

module.exports = app
