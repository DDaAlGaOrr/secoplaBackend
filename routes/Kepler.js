const express = require('express')
const router = express.Router()
const Kepler = require('./../controllers/KeplerController')

router.get('/getusers',Kepler.getUsers)
router.get('/getkdms',Kepler.getKdms)
router.get('/getkdsregion',Kepler.getKdsRegion)
router.get('/getkdsdirope',Kepler.getKdsDirOpe)
router.get('/getkdsregionsuc',Kepler.getKdsRegionSuc)
router.get('/getkdsdirre',Kepler.getKdsDirRe)
router.get('/getkdud',Kepler.getKdud)
router.get('/auth',Kepler.auth)
module.exports = router