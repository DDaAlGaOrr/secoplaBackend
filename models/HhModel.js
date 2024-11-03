const connection = require("./../database/hhconnection");
const HhModel = () => {};

HhModel.getCatPlaguicida = async () => {
  return await connection.executeQuery("select * from Cat_Plaguicida");
};

HhModel.getCatRodenticida = async () => {
  return await connection.executeQuery("select * from Cat_Rodenticida");
};

module.exports = HhModel;
