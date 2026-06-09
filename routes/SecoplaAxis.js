const express = require("express");
const router = express.Router();
const SecoplaAxisController = require("./../controllers/SecoplaAxisController");

// Ruta para obtener todo el staff
router.get("/getListaStaff", SecoplaAxisController.getListaStaff);

// Ruta para obtener un miembro del staff por su ID de forma dinámica
router.get("/getStaffById/:staffId", SecoplaAxisController.getStaffById);

module.exports = router;