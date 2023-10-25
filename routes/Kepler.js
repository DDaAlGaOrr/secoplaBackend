const express = require('express')
const router = express.Router()
const Kepler = require('./../controllers/KeplerController')

router.get('/getusers',Kepler.getUsers)
module.exports = router