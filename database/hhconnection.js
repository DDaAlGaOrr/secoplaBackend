const sql = require("mssql");
const config = {
  user: "sa",
  password: "$3c0pl4@1963",
  server: "216.250.114.132",
  database: "SECOPLA",
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

async function runQuery(query, params = []) {
  try {
    const pool = await sql.connect(config);
    const request = pool.request();

    // Agregar parámetros si existen
    params.forEach((param) => {
      request.input(param.name, param.type, param.value);
    });

    const result = await request.query(query);
    return result.recordset;
  } catch (error) {
    console.error("❌ Error en la base de datos:", error);
    throw error;
  }
}

module.exports = {
  runQuery,
  sql, // exportamos también para usar tipos de datos (ej: sql.Int)
};

// const kepler = new (require("rest-mssql-nodejs"))({
//   user: "sa",
//   password: "$3c0pl4@1963",
//   server: "216.250.114.132",
//   database: "SECOPLA",
//   port: 1433,
//   options: {
//     options: {
//       encrypt: true,
//       trustServerCertificate: true,
//       enableArithAbort: true, // ✅ Esto elimina la advertencia
//     },
//   },
// });

// module.exports = kepler;
