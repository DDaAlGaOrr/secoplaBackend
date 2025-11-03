const connection = require("./../database/hhconnection");
const HhModel = () => {};

HhModel.getCatPlaguicida = async () => {
  return await connection.runQuery("select * from Cat_Plaguicida");
};

HhModel.getCatRodenticida = async () => {
  return await connection.runQuery("select * from Cat_Rodenticida");
};

HhModel.getCodeFolio = async (folio) => {
  return await connection.executeQuery(
    `SELECT TOP 1 * 
     FROM TELEGRAM_CODIGOS 
     WHERE FechaCreacion > '2025-10-30' AND Folio = '${folio}'
     ORDER BY IdAutorizacion DESC`
  ); 
};

module.exports = HhModel;
