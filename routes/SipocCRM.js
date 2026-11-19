const express = require("express");
const router = express.Router();
const SipocCRMController = require("./../controllers/SipocCRMController");

// Ruta para obtener todo el staff
router.get("/getListaClientesSipoc", SecoplaAxisController.getListaClientesSipoc);



module.exports = router;