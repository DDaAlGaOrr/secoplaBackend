const express = require('express')
const router = express.Router()
const multer = require('multer');
const Kepler = require('./../controllers/KeplerController')

const upload = multer();

router.get('/getusers', Kepler.getUsers)
router.get('/getkdsGastosVehicular', Kepler.getkdsGastosVehicular)
router.get('/getkdms', Kepler.getKdms)
router.get('/getkdsregion', Kepler.getKdsRegion)
router.get('/getkdsdirope', Kepler.getKdsDirOpe)
router.get('/getkdsregionsuc', Kepler.getKdsRegionSuc)
router.get('/getkdsdirre', Kepler.getKdsDirRe)
router.get('/getkdud', Kepler.getKdud)
router.get('/getKdsCardexVehiculos', Kepler.getKdsCardexVehiculos)
router.get('/searchClient/:client', Kepler.searchClient)
router.get('/getSubsidiaryClient/:client', Kepler.getSubsidiaryClient)
router.get('/getClientById/:client', Kepler.getClientById)
router.get('/getFolio', Kepler.getFolio)
router.get('/getValidationFolio', Kepler.getValidationFolio)
router.get('/KDS_CHECKLIST', Kepler.KDS_CHECKLIST)
router.get('/getValidations', Kepler.getValidations)

router.post('/auth', Kepler.auth)
router.post('/saveChecklist', upload.none(), Kepler.saveChecklist)
router.post('/updateGastosVehicular', upload.none(), Kepler.updateGastosVehicular)
router.post('/updateKm', upload.none(), Kepler.updateckdsCardexVehiculos)
router.post('/saveValidation', upload.none(), Kepler.saveValidation)
router.post('/updateValidation', upload.none(), Kepler.updateValidation)
module.exports = router