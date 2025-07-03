const KeplerModel = require("./../models/KeplerModel");
const KeplerController = () => {};

KeplerController.auth = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existsUser = await KeplerModel.existUser(username);
  if (!existsUser) {
    const response = {
      status: "error",
      message: "usuario no encontrado",
    };
    return res.status(404).json(response);
  }
  // const passwordMatch = await KeplerModel.passwordMatch(password)
  if (password != "$3c0pl4") {
    const response = {
      status: "error",
      message: "contraseña incorrecta",
    };
    return res.status(404).json(response);
  }
  const response = {
    status: "success",
    message: "",
  };
  return res.status(200).json(response);
};

KeplerController.getUsers = async (req, res) => {
  const data = await KeplerModel.getUsers();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getKdms = async (req, res) => {
  const data = await KeplerModel.getKdms();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getKdsRegion = async (req, res) => {
  const data = await KeplerModel.getKdsRegion();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getKdsDirOpe = async (req, res) => {
  const data = await KeplerModel.getKdsDirOpe();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getKdsRegionSuc = async (req, res) => {
  const data = await KeplerModel.getKdsRegionSuc();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getKdsDirRe = async (req, res) => {
  const data = await KeplerModel.getKdsDirRe();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getKdud = async (req, res) => {
  const data = await KeplerModel.getKdud();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.searchClient = async (req, res) => {
  let key = req.params.client;
  const data = await KeplerModel.searchClient(key);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getSubsidiaryClient = async (req, res) => {
  let id_client = req.params.client;
  const data = await KeplerModel.getSubsidiaryClient(id_client);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getClientById = async (req, res) => {
  let id_client = req.params.client;
  const data = await KeplerModel.getClientById(id_client);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

KeplerController.getkdsGastosVehicular = async (req, res) => {
  const result = await KeplerModel.getkdsGastosVehicular();
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.getKdsCardexVehiculos = async (req, res) => {
  const result = await KeplerModel.getKdsCardexVehiculos();
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.saveChecklist = async (req, res) => {
  const result = await KeplerModel.saveChecklist(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(400).json(result.message);
  }
};

KeplerController.getFolio = async (req, res) => {
  const result = await KeplerModel.getFolio();
  if (result.success) {
    const lastFolio = result.data[0][0].c1;
    const splitFolio = lastFolio.split("-");
    const number = parseInt(splitFolio[1]) + 1;
    const paddedNumber = number.toString().padStart(8, "0");
    const newFolio = `C-${paddedNumber}`;
    return res.status(200).json(newFolio);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.updateGastosVehicular = async (req, res) => {
  const result = await KeplerModel.updateGastosVehicular(req.body);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
};

KeplerController.updateStatusGasto = async (req, res) => {
  const result = await KeplerModel.updateStatusGasto(req.body);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
};

KeplerController.KDS_CHECKLIST = async (req, res) => {
  const result = await KeplerModel.KDS_CHECKLIST();
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
};

KeplerController.updateckdsCardexVehiculos = async (req, res) => {
  const result = await KeplerModel.updateckdsCardexVehiculos(req.body);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
};

KeplerController.saveValidation = async (req, res) => {
  const result = await KeplerModel.saveValidation(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
};

KeplerController.updateValidation = async (req, res) => {
  const result = await KeplerModel.updateValidation(req.body);
  console.log("result");
  console.log(result);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
};

KeplerController.getValidationFolio = async (req, res) => {
  const result = await KeplerModel.getValidationFolio();
  if (result.success) {
    const lastFolio = result.data[0][0].c1;
    const splitFolio = lastFolio.split("-");
    const number = parseInt(splitFolio[1]) + 1;
    const paddedNumber = number.toString().padStart(8, "0");
    const newFolio = `S-${paddedNumber}`;
    return res.status(200).json(newFolio);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.getValidations = async (req, res) => {
  const result = await KeplerModel.getValidations();
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.updateCardexStatus = async (req, res) => {
  const result = await KeplerModel.updateCardexStatus(req.body);
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.saveKdsKilometrajeGps = async (req, res) => {
  const result = await KeplerModel.saveKdsKilometrajeGps(req.body);
  if (result.status) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.updateEstatusCardex = async (req, res) => {
  const result = await KeplerModel.updateEstatusCardex(req.body);
  if (result.success) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.kdsEventos = async (req, res) => {
  const result = await KeplerModel.kdsEventos(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.getKdsEventos = async (req, res) => {
  const result = await KeplerModel.getKdsEventos();
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.updateKdsEventos = async (req, res) => {
  const result = await KeplerModel.updateKdsEventos(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.getkdsCobranzaSeg = async (req, res) => {
  const result = await KeplerModel.getkdsCobranzaSeg(req.body);
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result.error);
  }
};

KeplerController.updatekdsCobranzaSeg = async (req, res) => {
  const result = await KeplerModel.updatekdsCobranzaSeg(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.getKdsNivelesCobranza = async (req, res) => {
  const result = await KeplerModel.getKdsNivelesCobranza();
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result.error);
  }
};

KeplerController.savekdsCobranzaLog = async (req, res) => {
  const result = await KeplerModel.savekdsCobranzaLog(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.saveKdsGastosK = async (req, res) => {
  const result = await KeplerModel.saveKdsGastosK(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.updateKdsGastosK = async (req, res) => {
  const result = await KeplerModel.updateKdsGastosK(req.body);
  if (result.success) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.insertKdsBajasRh = async (req, res) => {
  const result = await KeplerModel.insertKdsBajasRh(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(false);
  }
};

KeplerController.insertKdsPersonalRh = async (req, res) => {
  const result = await KeplerModel.insertKdsPersonalRh(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.insertKdsPuestosRh = async (req, res) => {
  const result = await KeplerModel.insertKdsPuestosRh(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.updateKdsPuestosRh = async (req, res) => {
  const result = await KeplerModel.updateKdsPuestosRh(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.updateKdsPersonalRh = async (req, res) => {
  const result = await KeplerModel.updateKdsPersonalRh(req.body);
  if (result.status) {
    return res.status(200).json(true);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.getKdsPresupuestoC = async (req, res) => {
  const result = await KeplerModel.getKdsPresupuestoC(req.params.nominaS);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.getKdsKdiiC = async (req, res) => {
  const clave = req.params.clave;
  const result = await KeplerModel.getKdsKdiiC(clave);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.getKdsControllUnidades = async (req, res) => {
  const result = await KeplerModel.getKdsControllUnidades(req.params.clave);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.insertKdsControllUnidades = async (req, res) => {
  const result = await KeplerModel.insertKdsControllUnidades(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.insertKdsSolicitudUnidades = async (req, res) => {
  const result = await KeplerModel.insertKdsSolicitudUnidades(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.updateKdsSolicitudUnidades = async (req, res) => {
  const result = await KeplerModel.updateKdsSolicitudUnidades(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.getKdsSolicitudUnidades = async (req, res) => {
  const result = await KeplerModel.getKdsSolicitudUnidades();
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.insertKdsSolictudGastos = async (req, res) => {
  const result = await KeplerModel.insertKdsSolictudGastos(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.insertKdsTransferGastos = async (req, res) => {
  const result = await KeplerModel.insertKdsTransferGastos(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.insertKdsXmlGastosAprobado = async (req, res) => {
  const result = await KeplerModel.insertKdsXmlGastosAprobado(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.insertKdsItemsGastos = async (req, res) => {
  const result = await KeplerModel.insertKdsItemsGastos(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.updateKdsSolictudGastos = async (req, res) => {
  const result = await KeplerModel.updateKdsSolictudGastos(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.updateKdsTransferGastos = async (req, res) => {
  const result = await KeplerModel.updateKdsTransferGastos(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.updateKdsXmlGastosAprobado = async (req, res) => {
  const result = await KeplerModel.updateKdsXmlGastosAprobado(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.updateKdsItemsGastos = async (req, res) => {
  const result = await KeplerModel.updateKdsItemsGastos(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.getKdii = async (req, res) => {
  const result = await KeplerModel.getKdii();
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.insertKdsSolicitudMaterial = async (req, res) => {
  const result = await KeplerModel.insertKdsSolicitudMaterial(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.getKdiiTotal = async (req, res) => {
  const result = await KeplerModel.getKdiiTotal();
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.insertKdsSolictudGastosDescuento = async (req, res) => {
  const result = await KeplerModel.insertKdsSolictudGastosDescuento(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};
KeplerController.insertKdsXmlGastosAprobadoDescuen = async (req, res) => {
  const result = await KeplerModel.insertKdsXmlGastosAprobadoDescuen(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

KeplerController.getKdil = async (req, res) => {
  const result = await KeplerModel.getKdil(req.body);
  if (result.status) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

module.exports = KeplerController;
