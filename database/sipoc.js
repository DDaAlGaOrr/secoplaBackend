const mysql = require("mysql2/promise");

const config = {
  host: "209.46.125.208",
  user: "admin_sipoc_crm",
  password: "admin_sipoc_crm",
  database: "admin_sipoc_crm",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(config);

async function runQuery(query, params = []) {
  try {
    let result;

    if (!Array.isArray(params) && typeof params === 'object') {
      const [rows] = await pool.execute(query, params);
      result = rows;
    } else {
      const [rows] = await pool.execute(query, params);
      result = rows;
    }

    return result;
  } catch (error) {
    console.error("❌ Error en la base de datos MySQL:", error);
    throw error;
  }
}

module.exports = {
  runQuery,
  mysql,
};