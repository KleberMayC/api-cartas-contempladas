const express = require('express');
const router = express.Router();
const cartasController = require("./../controller/cartasController")

router.get('/', cartasController.getCartas)

router.get('/:numero', cartasController.getOneCarta)

router.post('/', cartasController.createCartas)

router.put('/:numero', cartasController.updateCarta)

router.delete('/:numero', cartasController.removeCarta)

module.exports = router