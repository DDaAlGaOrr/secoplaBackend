const express = require('express')
const router = express.Router()
const PlaguicidasController = require('./../controllers/PlaguicidasController')

router.get('/plaguicidas',PlaguicidasController.getPlaguicidas)
module.exports = router