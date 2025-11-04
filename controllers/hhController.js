const HhModel = require("./../models/HhModel");
const HhController = () => {};

HhController.getCatPlaguicida = async (req, res) => {
  const result = await HhModel.getCatPlaguicida();
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result.error);
  }
};

HhController.getCatRodenticida = async (req, res) => {
  const result = await HhModel.getCatRodenticida();
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result.error);
  }
};

HhController.getCodeFolio = async (req, res) => {
  let folio = req.params.folio;
  const data = await HhModel.getCodeFolio(folio);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};


HhController.getlistaUsuarios = async (req, res) => {
  
  const data = await HhModel.getlistaUsuarios();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

HhController.getlistaZonas = async (req, res) => {
  
  const data = await HhModel.getlistaZonas();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};


HhController.getlistaClientes = async (req, res) => {
  
  const data = await HhModel.getlistaClientes();
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

HhController.getProblemasEnvio = async (req, res) => {
  let cliente = req.params.cliente;
  const data = await HhModel.getProblemasEnvio(cliente);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

HhController.autorizarServiciosPorZona = async (req, res) => {
  let zona = req.params.zona;
  let fechaInicio = req.params.fechaInicio;
  let fechaFin = req.params.fechaFin;
  const data = await HhModel.autorizarServiciosPorZona(zona, fechaInicio, fechaFin);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

HhController.getServiciosPorZona = async (req, res) => {
  let zona = req.params.zona;
  let fechaInicio = req.params.fechaInicio;
  let fechaFin = req.params.fechaFin;
  const data = await HhModel.getServiciosPorZona(zona, fechaInicio, fechaFin);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

HhController.eliminarFoliosCliente = async (req, res) => {
  let cliente = req.params.cliente;
  let fechaInicio = req.params.fechaInicio;
  let fechaFin = req.params.fechaFin;
  let folio = req.params.folio;
  const data = await HhModel.eliminarFoliosCliente(cliente, fechaInicio, fechaFin, folio);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};

HhController.consultarFoliosCliente = async (req, res) => {
  let cliente = req.params.cliente;
  let fechaInicio = req.params.fechaInicio;
  let fechaFin = req.params.fechaFin;
  let folio = req.params.folio;
  const data = await HhModel.consultarFoliosCliente(cliente, fechaInicio, fechaFin, folio);
  const response = {
    status: "success",
    data: data,
  };
  return res.status(200).json(response);
};


module.exports = HhController;
