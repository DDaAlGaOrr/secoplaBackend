const connection = require("./../database/sipoc");

const SipocCRMModel = () => {};

// Corregido: cambiados a SecoplaAxisModel
SipocCRMModel.getListaClientesSipoc = async () => {
  const query = `
    SELECT
      *
    FROM tblclients
    where active = 1
  `;
  return await connection.runQuery(query);
};



module.exports = SipocCRMModel;