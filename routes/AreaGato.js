const express = require('express')
const router = express.Router()
const AreagatoController = require('./../controllers/AreagatoController')

router.get('/areaGato',AreagatoController.getAreaGato)
router.get('/estadoGato',AreagatoController.getEstadoGato)
module.exports = router