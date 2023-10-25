const express = require('express')
const router = express.Router()
const RodenticidaController = require('./../controllers/RodenticidaController')

router.get('/rodenticida',RodenticidaController.getRodenticidas)
module.exports = router