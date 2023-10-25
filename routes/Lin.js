const express = require('express')
const router = express.Router()
const Lin = require('./../controllers/LinController')

router.get('/lin',Lin.getLin)
module.exports = router