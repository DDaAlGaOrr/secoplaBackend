const SecoplaAxisModel = require("./../models/SecoplaAxisModel");

const SecoplaAxisController = () => {};

/**
 * Obtiene todos los miembros del staff con su nombre completo concatenado
 */
SecoplaAxisController.getListaStaff = async (req, res) => {
  try {
    const data = await SecoplaAxisModel.getListaStaff();
    const response = {
      status: "success",
      data: data,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Obtiene un miembro del staff específico por su ID
 * Espera el parámetro en la URL, ej: /staff/:staffId
 */
SecoplaAxisController.getStaffById = async (req, res) => {
  try {
    let staffId = req.params.staffId;
    const data = await SecoplaAxisModel.getStaffById(staffId);
    
    const response = {
      status: "success",
      data: data,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = SecoplaAxisController;