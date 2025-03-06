const Sequelize = require("sequelize");

// Configura la conexión con los datos proporcionados
const sequelize = new Sequelize("KEPLER_K95R", "sa", "$3c0pl4@1963", {
  host: "82.223.68.37",
  dialect: "mssql",
  port: 1433,
  dialectOptions: {
    options: {
      encrypt: false, // Usa cifrado
      trustServerCertificate: false, // Confía en el certificado del servidor
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a SQL Server establecida con éxito.");
  })
  .catch((err) => {
    console.error("No se pudo conectar a SQL Server:", err);
  });

module.exports = sequelize;
