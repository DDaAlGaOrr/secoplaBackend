const HhModel = require("./../models/HhModel");
const HhController = () => {};

HhController.getCatPlaguicida = async (req, res) => {
  const result = await HhModel.getCatPlaguicida();
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result.error);
  }
};

HhController.getCatRodenticida = async (req, res) => {
  const result = await HhModel.getCatRodenticida();
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json(result.error);
  }
};

module.exports = HhController;
