const express = require('express');
const router = express.Router();
const cartasController = require("./../controller/cartasController")

router.get('/', cartasController.getCartas)
    


module.exports = router