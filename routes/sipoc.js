const express = require('express')
const router = express.Router()
const sipoc = require('./../controllers/SipocController')

router.get('/lln',sipoc.getlln)
router.get('/getClientServices/:client',sipoc.getClientServices)
router.get('/getClientservice/:client',sipoc.getClientservice)
module.exports = router