const connection = require("./../database/secoplaxis");

const SecoplaAxisModel = () => {};

// Corregido: cambiados a SecoplaAxisModel
SecoplaAxisModel.getListaStaff = async () => {
  const query = `
    SELECT
      CONCAT(firstname, ' ', lastname) AS nombreCompleto,
      curp,
      password 
    FROM tblstaff
    where active = 1
  `;
  return await connection.runQuery(query);
};

SecoplaAxisModel.getStaffById = async (staffId) => {
  const query = `
    SELECT 
      CONCAT(firstname, ' ', lastname) AS nombreCompleto,
      curp,
      password 
    FROM tblstaff 
    WHERE staffid = :staffId
  `;
  
  return await connection.runQuery(query, { staffId });
};

module.exports = SecoplaAxisModel;