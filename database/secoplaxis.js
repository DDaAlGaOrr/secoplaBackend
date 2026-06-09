const mysql = require("mysql2/promise");

// Configuración de la base de datos MySQL
const config = {
  host: "209.46.125.208",
  user: "admin_sipoc_crm",
  password: "admin_sipoc_crm",
  database: "admin_sipoc_dev",
  port: 3306, // Puerto por defecto de MySQL
  waitForConnections: true,
  connectionLimit: 10, // Equivalente a max: 10 en tu pool de mssql
  queueLimit: 0,
};

// Crear el pool de conexiones (MySQL maneja el pool de forma persistente)
const pool = mysql.createPool(config);

/**
 * Ejecuta una consulta en MySQL
 * @param {string} query - Consulta SQL (usa '?' para placeholders posicionales o ':key' para nombrados)
 * @param {Array|Object} params - Parámetros para la consulta
 */
async function runQuery(query, params = []) {
  try {
    let result;

    // Si pasas un Objeto, usamos .execute() con placeholders nombrados (ej: :id)
    if (!Array.isArray(params) && typeof params === 'object') {
      // mysql2 requiere activar una opción o formatear si usas objetos, 
      // pero la forma más limpia y nativa es transformar el objeto a los valores que pide el query.
      // Para mantenerlo simple y compatible con arrays/objetos nativos de mysql2:
      const [rows] = await pool.execute(query, params);
      result = rows;
    } 
    // Si pasas un Array (ej: [1, 'texto']), se usa con placeholders normales (ej: ?)
    else {
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
  mysql, // Exportamos por si necesitas funciones avanzadas de la librería
};