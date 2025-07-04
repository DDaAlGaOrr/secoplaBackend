const express = require("express");
const router = express.Router();
const multer = require("multer");
const Kepler = require("./../controllers/KeplerController");

const upload = multer();

router.get("/getusers", Kepler.getUsers);
router.get("/getkdsGastosVehicular", Kepler.getkdsGastosVehicular);
router.get("/getkdms", Kepler.getKdms);
router.get("/getkdsregion", Kepler.getKdsRegion);
router.get("/getkdsdirope", Kepler.getKdsDirOpe);
router.get("/getkdsregionsuc", Kepler.getKdsRegionSuc);
router.get("/getkdsdirre", Kepler.getKdsDirRe);
router.get("/getkdud", Kepler.getKdud);
router.get("/getKdsCardexVehiculos", Kepler.getKdsCardexVehiculos);
router.get("/searchClient/:client", Kepler.searchClient);
router.get("/getSubsidiaryClient/:client", Kepler.getSubsidiaryClient);
router.get("/getClientById/:client", Kepler.getClientById);
router.get("/getFolio", Kepler.getFolio);
router.get("/getValidationFolio", Kepler.getValidationFolio);
router.get("/KDS_CHECKLIST", Kepler.KDS_CHECKLIST);
router.get("/getValidations", Kepler.getValidations);
router.get("/getKdsEventos", Kepler.getKdsEventos);
router.get("/getkdsCobranzaSeg", Kepler.getkdsCobranzaSeg);
router.get("/getKdsNivelesCobranza", Kepler.getKdsNivelesCobranza);
router.get("/getKdsPresupuestoC/:nominaS", Kepler.getKdsPresupuestoC);
router.get("/getKdsKdiiC/:clave", Kepler.getKdsKdiiC);
router.get("/getKdsControllUnidades/", Kepler.getKdsControllUnidades);
router.get("/getKdsSolicitudUnidades/", Kepler.getKdsSolicitudUnidades);
router.get("/getKdii/", Kepler.getKdii);
router.get("/getKdiiTotal/", Kepler.getKdiiTotal);
router.get("/getKdsKdiiC/", Kepler.getKdsKdiiC);
router.get("/getKdil/", Kepler.getKdil);

router.post("/auth", Kepler.auth);
router.post("/saveChecklist", upload.none(), Kepler.saveChecklist);
router.post(
  "/updateGastosVehicular",
  upload.none(),
  Kepler.updateGastosVehicular
);
router.post("/updateKm", upload.none(), Kepler.updateckdsCardexVehiculos);
router.post("/saveValidation", upload.none(), Kepler.saveValidation);
router.post("/updateValidation", upload.none(), Kepler.updateValidation);
router.post("/updateCardexStatus", upload.none(), Kepler.updateCardexStatus);
router.post("/updateStatusGasto", upload.none(), Kepler.updateStatusGasto);
router.post(
  "/saveKdsKilometrajeGps",
  upload.none(),
  Kepler.saveKdsKilometrajeGps
);
router.post("/updateEstatusCardex", upload.none(), Kepler.updateEstatusCardex);
router.post("/saveKdsEventos", upload.none(), Kepler.kdsEventos);
router.post("/updateKdsEventos", upload.none(), Kepler.updateKdsEventos);
router.post(
  "/updatekdsCobranzaSeg",
  upload.none(),
  Kepler.updatekdsCobranzaSeg
);
router.post("/savekdsCobranzaLog", upload.none(), Kepler.savekdsCobranzaLog);
router.post("/saveKdsGastosK", upload.none(), Kepler.saveKdsGastosK);
router.post("/updateKdsGastosK", upload.none(), Kepler.updateKdsGastosK);
router.post("/insertKdsBajasRh", upload.none(), Kepler.insertKdsBajasRh);
router.post("/insertKdsPersonalRh", upload.none(), Kepler.insertKdsPersonalRh);
router.post("/insertKdsPuestosRh", upload.none(), Kepler.insertKdsPuestosRh);
router.post("/updateKdsPuestosRh", upload.none(), Kepler.updateKdsPuestosRh);
router.post("/updateKdsPersonalRh", upload.none(), Kepler.updateKdsPersonalRh);

router.post(
  "/insertKdsControllUnidades",
  upload.none(),
  Kepler.insertKdsControllUnidades
);
router.post(
  "/insertKdsSolicitudUnidades",
  upload.none(),
  Kepler.insertKdsSolicitudUnidades
);
router.post(
  "/updateKdsSolicitudUnidades",
  upload.none(),
  Kepler.updateKdsSolicitudUnidades
);
router.post(
  "/insertKdsSolictudGastos",
  upload.none(),
  Kepler.insertKdsSolictudGastos
);
router.post(
  "/insertKdsTransferGastos",
  upload.none(),
  Kepler.insertKdsTransferGastos
);
router.post(
  "/insertKdsSolicitudMaterial",
  upload.none(),
  Kepler.insertKdsSolicitudMaterial
);
router.post(
  "/insertKdsXmlGastosAprobado",
  upload.none(),
  Kepler.insertKdsXmlGastosAprobado
);
router.post(
  "/insertKdsItemsGastos",
  upload.none(),
  Kepler.insertKdsItemsGastos
);
router.post(
  "/insertKdsSolictudGastosDescuento",
  upload.none(),
  Kepler.insertKdsSolictudGastosDescuento
);
router.post(
  "/insertKdsXmlGastosAprobadoDescuen",
  upload.none(),
  Kepler.insertKdsXmlGastosAprobadoDescuen
);

router.post(
  "/updateKdsSolictudGastos",
  upload.none(),
  Kepler.updateKdsSolictudGastos
);
router.post(
  "/updateKdsTransferGastos",
  upload.none(),
  Kepler.updateKdsTransferGastos
);
router.post(
  "/updateKdsXmlGastosAprobado",
  upload.none(),
  Kepler.updateKdsXmlGastosAprobado
);
router.post(
  "/updateKdsItemsGastos",
  upload.none(),
  Kepler.updateKdsItemsGastos
);

module.exports = router;
