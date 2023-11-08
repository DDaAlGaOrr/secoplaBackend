const express = require('express')
const router = express.Router()
const sipoc = require('./../controllers/SipocController')

router.get('/lln',sipoc.getlln)
module.exports = router