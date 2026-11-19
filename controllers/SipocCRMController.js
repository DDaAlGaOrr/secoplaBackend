const SipocCRMModel = require("./../models/SipocCRMModel");

const SipocCRMController = () => {};


SipocCRMController.getListaClientesSipoc = async (req, res) => {
  try {
    const data = await SipocCRMModel.getListaClientesSipoc();
    const response = {
      status: "success",
      data: data,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};



module.exports = SipocCRMController;