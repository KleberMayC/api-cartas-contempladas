const express = require('express');
const router = express.Router();
const cartasController = require("./../controller/cartasController")

router.get('/', cartasController.getCartas)

router.get('/:id', cartasController.getOneCarta)




module.exports = router