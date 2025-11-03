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


module.exports = HhController;
