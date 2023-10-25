const express = require('express')
const router = express.Router()
const Rnp = require('./../controllers/RnpController')

router.get('/rnp',Rnp.getRnp)
module.exports = router