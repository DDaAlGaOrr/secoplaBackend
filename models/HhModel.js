const connection = require("./../database/hhconnection");
const HhModel = () => {};

HhModel.getCatPlaguicida = async () => {
  return await connection.runQuery("select * from Cat_Plaguicida");
};

HhModel.getCatRodenticida = async () => {
  return await connection.runQuery("select * from Cat_Rodenticida");
};

HhModel.getCodeFolio = async (cliente) => {
  // Primero obtenemos el Id_Cliente a partir del Num_Cliente
  const resultCliente = await connection.runQuery(
    `SELECT TOP 1 Id_Cliente 
     FROM Cat_Clientes 
     WHERE Num_Cliente = '${cliente}'`
  );

  if (!resultCliente || resultCliente.length === 0) {
    return { error: true, message: "Cliente no encontrado" };
  }

  const idCliente = resultCliente[0].Id_Cliente;

  // Ahora buscamos en TELEGRAM_CODIGOS usando el Id_Cliente como Folio
  return await connection.runQuery(
    `SELECT TOP 1 * 
     FROM TELEGRAM_CODIGOS 
     WHERE FechaCreacion > '2025-10-30' AND Folio = '${idCliente}'
     ORDER BY IdAutorizacion DESC`
  );
};


HhModel.getlistaUsuarios = async () => {
  return await connection.runQuery(`
    SELECT 
      U.Usuario,
      U.Nombre,
      U.Apellido,
      U.Correo,
      U.Departamento,
      Z.zona
    FROM Usuarios U
    INNER JOIN Cat_Zona Z ON U.Id_zona = Z.Id_zona
  `);
};

HhModel.getlistaZonas = async () => {
  return await connection.runQuery("select * from Cat_Zona");
};


HhModel.getlistaClientes = async () => {
  return await connection.runQuery(`
    SELECT 
      C.Num_Cliente,
      C.Nombre,
      C.Razon,
      C.Industria,
      C.Correo,
      C.FECHA_CREACION,
      C.FECHAACTUALIZA,
      C.Habilita_NFC,
      Z.zona
    FROM Cat_Clientes C
    INNER JOIN Cat_Zona Z ON C.id_zona = Z.Id_zona
  `);
};


HhModel.getProblemasEnvio = async (cliente) => {
  return await connection.runQuery(`SELECT TOP 1 * FROM LOG_ENVIOREPORTE WHERE NUMCLIENTE = '${cliente}' ORDER BY FECHAINSERTADO;`);
};


// HhModel.autorizarServiciosPorZona = async (zona, fechaInicio, fechaFin) => {
//   // 1. Buscar el Id_zona basado en el nombre de la zona
//   const zonaQuery = `
//     SELECT TOP 1 Id_zona 
//     FROM Cat_Zona
//     WHERE zona = @zona;
//   `;

//   const zonaResult = await connection.runQuery(zonaQuery, { zona });

//   if (!zonaResult || zonaResult.length === 0) {
//     throw new Error(`Zona no encontrada: ${zona}`);
//   }

//   const idZona = zonaResult[0].Id_zona;

//   // 2. Ejecutar el UPDATE usando el Id_zona encontrado
//   const updateQuery = `
//     UPDATE s
//     SET s.AUTORIZADO = 1
//     FROM SERVICIO_FUERADERANGO s
//     JOIN Cat_Clientes c ON c.Id_Cliente = s.IDCLIENTE
//     WHERE c.id_zona = @idZona
//       AND s.AUTORIZADO = 4
//       AND s.FECHAINSERTADO BETWEEN @fechaInicio AND @fechaFin;
//   `;

//   return await connection.runQuery(updateQuery, {
//     idZona,
//     fechaInicio,
//     fechaFin
//   });
// };


HhModel.autorizarServiciosPorZona = async (zona, fechaInicio, fechaFin) => {
  // 1. Buscar zona
  const zonaQuery = `
    SELECT TOP 1 Id_zona 
    FROM Cat_Zona
    WHERE zona = @zona;
  `;

  const zonaResult = await connection.runQuery(zonaQuery, { zona });

  if (!zonaResult || zonaResult.length === 0) {
    throw new Error(`Zona no encontrada: ${zona}`);
  }

  const idZona = zonaResult[0].Id_zona;

  // 2. UPDATE + SELECT @@ROWCOUNT
  const updateQuery = `
    UPDATE s
    SET s.AUTORIZADO = 1
    FROM SERVICIO_FUERADERANGO s
    JOIN Cat_Clientes c ON c.Id_Cliente = s.IDCLIENTE
    WHERE c.id_zona = @idZona
      AND s.AUTORIZADO = 4
      AND s.FECHAINSERTADO BETWEEN @fechaInicio AND @fechaFin;

    SELECT @@ROWCOUNT AS filasActualizadas;
  `;

  return await connection.runQuery(updateQuery, {
    idZona,
    fechaInicio,
    fechaFin
  });
};





HhModel.getServiciosPorZona = async (zona, fechaInicio, fechaFin) => {
  // 1. Buscar el Id_zona por nombre
  const zonaQuery = `
    SELECT TOP 1 Id_zona 
    FROM Cat_Zona
    WHERE zona = @zona;
  `;

  const zonaResult = await connection.runQuery(zonaQuery, { zona });

  if (!zonaResult || zonaResult.length === 0) {
    throw new Error(`Zona no encontrada: ${zona}`);
  }

  const idZona = zonaResult[0].Id_zona;

  // 2. Consulta SELECT
  const selectQuery = `
    SELECT s.*, c.id_zona 
    FROM SERVICIO_FUERADERANGO s
    JOIN Cat_Clientes c ON c.Id_Cliente = s.IDCLIENTE
    WHERE c.id_zona = @idZona
      AND s.AUTORIZADO = 4
      AND s.FECHAINSERTADO BETWEEN @fechaInicio AND @fechaFin;
  `;

  return await connection.runQuery(selectQuery, {
    idZona,
    fechaInicio,
    fechaFin
  });
};

// HhModel.eliminarFoliosCliente = async (cliente, fechaInicio, fechaFin, folio) => {
//   // Buscar ID del cliente
//   const clienteQuery = `
//     SELECT TOP 1 Id_Cliente 
//     FROM Cat_Clientes
//     WHERE Num_Cliente = @cliente;
//   `;
//   const clienteResult = await connection.runQuery(clienteQuery, { cliente });

//   if (!clienteResult || clienteResult.length === 0) {
//     throw new Error(`Cliente no encontrado: ${cliente}`);
//   }

//   const idCliente = clienteResult[0].Id_Cliente;

//   // Base para los deletes
//   const tablas = ["EDCM", "LLN", "RNP"];

//   // Construcción dinámica del WHERE
//   let conditions = `WHERE Id_Cliente = @idCliente`;

//   if (fechaInicio != "sinfecha" && fechaFin != "sinfecha") {
//     conditions += ` AND Fecha BETWEEN @fechaInicio AND @fechaFin`;
//   }

//   if (folio != "sinfolio") {
//     conditions += ` AND Folio = @folio`;
//   }

//   // Ejecutar deletes para cada tabla
//   for (const tabla of tablas) {
//     const deleteQuery = `
//       DELETE FROM ${tabla}
//       ${conditions};
//     `;
//     await connection.runQuery(deleteQuery, {
//       idCliente,
//       fechaInicio,
//       fechaFin,
//       folio
//     });
//   }

//   return { success: true, message: "Folios eliminados correctamente" };
// };


HhModel.eliminarFoliosCliente = async (cliente, fechaInicio, fechaFin, folio) => {
  // Buscar ID del cliente
  const clienteQuery = `
    SELECT TOP 1 Id_Cliente 
    FROM Cat_Clientes
    WHERE Num_Cliente = @cliente;
  `;
  const clienteResult = await connection.runQuery(clienteQuery, { cliente });

  if (!clienteResult || clienteResult.length === 0) {
    throw new Error(`Cliente no encontrado: ${cliente}`);
  }

  const idCliente = clienteResult[0].Id_Cliente;

  const tablas = ["EDC", "EDCM", "LLN", "RNP"];

  let conditions = `WHERE Id_Cliente = @idCliente`;

  if (fechaInicio != "sinfecha" && fechaFin != "sinfecha") {
    conditions += ` AND Fecha BETWEEN @fechaInicio AND @fechaFin`;
  } 

  if (folio != "sinfolio") {
    conditions += ` AND Folio = @folio`;
  }

  // Acumulador de filas eliminadas
  let filasEliminadas = 0;

  // Ejecutar deletes para cada tabla
  for (const tabla of tablas) {
    const deleteQuery = `
      DELETE FROM ${tabla}
      ${conditions};

      SELECT @@ROWCOUNT AS filas;
    `;

    const result = await connection.runQuery(deleteQuery, {
      idCliente,
      fechaInicio,
      fechaFin,
      folio
    });

    if (result && result.length > 0) {
      filasEliminadas += result[0].filas;
    }
  }

  return { 
    success: true, 
    message: "Folios eliminados correctamente",
    filasEliminadas 
  };
};





// HhModel.consultarFoliosCliente = async (cliente, fechaInicio, fechaFin, folio) => {
//   const clienteQuery = `
//     SELECT TOP 1 Id_Cliente 
//     FROM Cat_Clientes
//     WHERE Num_Cliente = @cliente;
//   `;
//   const clienteResult = await connection.runQuery(clienteQuery, { cliente });

//   if (!clienteResult || clienteResult.length === 0) {
//     throw new Error(`Cliente no encontrado: ${cliente}`);
//   }

//   const idCliente = clienteResult[0].Id_Cliente;

//   const tablas = ["EDC", "EDCM", "LLN", "RNP"];

//   let conditions = `WHERE Id_Cliente = @idCliente`;

//   if (fechaInicio != "sinfecha" && fechaFin != "sinfecha") {
//     conditions += ` AND Fecha BETWEEN @fechaInicio AND @fechaFin`;
//   }

//   if (folio != "sinfolio") {
//     conditions += ` AND Folio = @folio`;
//   }

//   let resultados = {};

//   for (const tabla of tablas) {
//     const selectQuery = `
//       SELECT * FROM ${tabla}
//       ${conditions};
//     `;

//     const rows = await connection.runQuery(selectQuery, {
//       idCliente,
//       fechaInicio,
//       fechaFin,
//       folio
//     });

//     resultados[tabla] = rows;
//   }

//   return resultados;
// };

HhModel.consultarFoliosCliente = async (cliente, fechaInicio, fechaFin, folio) => {
  const clienteQuery = `
    SELECT TOP 1 Id_Cliente
    FROM Cat_Clientes
    WHERE Num_Cliente = @cliente;
  `;
  const clienteResult = await connection.runQuery(clienteQuery, { cliente });

  if (!clienteResult || clienteResult.length === 0) {
    throw new Error(`Cliente no encontrado: ${cliente}`);
  }

  const idCliente = clienteResult[0].Id_Cliente;

  const tablas = ["EDC", "EDCM", "LLN", "RNP"];

  let conditions = `WHERE Id_Cliente = @idCliente`;

  if (fechaInicio != "sinfecha" && fechaFin != "sinfecha") {
    conditions += ` AND Fecha BETWEEN @fechaInicio AND @fechaFin`;
  }

  if (folio != "sinfolio") {
    conditions += ` AND Folio = @folio`;
  }

  let resultados = {};

  for (const tabla of tablas) {
    const selectQuery = `
      SELECT COUNT(*) AS total
      FROM ${tabla}
      ${conditions};
    `;

    const rows = await connection.runQuery(selectQuery, {
      idCliente,
      fechaInicio,
      fechaFin,
      folio
    });

    resultados[tabla] = rows[0]?.total ?? 0;
  }

  return resultados;
};





module.exports = HhModel;
