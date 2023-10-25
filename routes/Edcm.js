const express = require('express')
const router = express.Router()
const Edcm = require('./../controllers/EdcmController')

router.get('/edcm',Edcm.getEdcm)
module.exports = router