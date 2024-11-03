const express = require("express");
const router = express.Router();
const hhController = require("./../controllers/hhController");

router.get("/getCatPlaguicida", hhController.getCatPlaguicida);
router.get("/getCatRodenticida", hhController.getCatRodenticida);

module.exports = router;
