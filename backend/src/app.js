const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cartasRoute = require("./routes/cartasRoute")

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/cartas', cartasRoute)

module.exports = app
