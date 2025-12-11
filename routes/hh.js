const express = require("express");
const router = express.Router();
const hhController = require("./../controllers/hhController");

router.get("/getCatPlaguicida", hhController.getCatPlaguicida);
router.get("/getCatRodenticida", hhController.getCatRodenticida);
router.get("/getCodeFolio/:folio", hhController.getCodeFolio);
router.get("/getlistaUsuarios", hhController.getlistaUsuarios);
router.get("/getUsuarioById/:Id_Usuario", hhController.getUsuarioById);
router.get("/getlistaZonas", hhController.getlistaZonas);
router.get("/getlistaClientes", hhController.getlistaClientes);
router.get("/getProblemasEnvio/:cliente", hhController.getProblemasEnvio);
router.get("/autorizarServiciosPorZona/:zona/:fechaInicio/:fechaFin", hhController.autorizarServiciosPorZona);
router.get("/getServiciosPorZona/:zona/:fechaInicio/:fechaFin", hhController.getServiciosPorZona);
router.get("/eliminarFoliosCliente/:cliente/:fechaInicio/:fechaFin/:folio", hhController.eliminarFoliosCliente);
router.get("/consultarFoliosCliente/:cliente/:fechaInicio/:fechaFin/:folio", hhController.consultarFoliosCliente);

module.exports = router;
