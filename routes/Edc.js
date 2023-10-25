const express = require('express')
const router = express.Router()
const Edc = require('./../controllers/EdcController')

router.get('/edc',Edc.getEdc)
module.exports = router