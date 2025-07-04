const connection = require("./../database/kepler");
const sequelize = require("./../database/conection");
const KeplerModel = () => {};

KeplerModel.existUser = async (username) => {
  const result = await connection.executeQuery(
    `SELECT c1 FROM KDS_USUARIOS_CUENTAS WHERE c1 = '${username}'`
  );
  console.log(result.data);
  if (result.data) {
    return true;
  } else {
    return false;
  }
  // if(result && result.data){
  //     return result
  // }
  // else{
  //     return false
  // }
};

KeplerModel.getUsers = async () => {
  return connection.executeQuery("select * from KDS_USUARIOS_CUENTAS");
};

KeplerModel.getUsers = async () => {
  return connection.executeQuery("select * from KDS_USUARIOS_CUENTAS");
};

KeplerModel.getKdms = async () => {
  return connection.executeQuery("select * from kds_PersonalRH");
};

KeplerModel.getKdsRegion = async () => {
  return connection.executeQuery("select * from KDS_REGION");
};

KeplerModel.getKdsDirOpe = async () => {
  return connection.executeQuery("select * from kds_direcciones_ope");
};

KeplerModel.getKdsRegionSuc = async () => {
  return connection.executeQuery("select  * from kds_region_suc");
};

KeplerModel.getKdsDirRe = async () => {
  return connection.executeQuery("select  * from kds_direccion_reg");
};

KeplerModel.getKdud = async () => {
  return connection.executeQuery("select c2,c3,c9,c10,c27 from kdud");
};

KeplerModel.searchClient = async (key) => {
  try {
    const queryString = `SELECT C2 as user_id, C3 as client_name FROM kdud WHERE C3 LIKE '%${key}%'`;
    const result = await connection.executeQuery(queryString);
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

KeplerModel.getSubsidiaryClient = async (key) => {
  try {
    const queryString = `SELECT C1 as user_id, C2 as subsidiary_id, C12 subsidiary FROM kdudent WHERE C1 = '${key}'`;
    const result = await connection.executeQuery(queryString);
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

KeplerModel.getClientById = async (id) => {
  return await connection.executeQuery(
    `SELECT * FROM Kdudent WHERE c1 = '${id}'`
  );
};

KeplerModel.getkdsGastosVehicular = async () => {
  return await connection.executeQuery("select * from kds_gastos_vehicular");
};

KeplerModel.getKdsCardexVehiculos = async () => {
  return await connection.executeQuery("select * from kds_cardex_vehiculos");
};

KeplerModel.saveChecklist = async (data) => {
  let id = await connection.executeQuery(
    "SELECT TOP 1 c1 FROM KDS_CHECKLIST ORDER BY c1 DESC"
  );
  let lastFolio = id.data[0][0].c1;
  const splitFolio = lastFolio.split("-");
  let number = parseInt(splitFolio[1]);
  number++;
  const paddedNumber = number.toString().padStart(8, "0");
  const newFolio = `C-${paddedNumber}`;
  console.log("data");
  console.log(data);
  let params = [
    newFolio,
    data.num_economico.trim(),
    data.placas.trim(),
    data.current_date,
    data.km.trim(),
    data.responsable.trim(),
    data.telefono.trim(),
    data.zona.trim(),
    data.region.trim(),
    data.tar_circulacion.trim(),
    data.bolsa_herramienta.trim(),
    data.poliza_seguro.trim(),
    data.gato_manivel.trim(),
    data.tarjeta_gasolina.trim(),
    data.engomado.trim(),
    data.reflejantes.trim(),
    data.tag.trim(),
    data.poliza_garantia.trim(),
    data.llanta_refaccion.trim(),
    data.manual_conductor.trim(),
    data.poliza_asistencia.trim(),
    data.aceite_motor.trim(),
    data.presion_llantas.trim(),
    data.anticongelante.trim(),
    data.liquido_frenos.trim(),
    data.aceite_hidra.trim(),
    data.limpia_parabrisas.trim(),
    data.limpia_para_funcional.trim(),
    data.interiores_buenos.trim(),
    data.nivel_combustible.trim(),
    data.faro_izquierdo.trim(),
    data.calavera_izquierda.trim(),
    data.faro_derecho.trim(),
    data.calavera_derecha.trim(),
    data.cofre.trim(),
    data.cajuela.trim(),
    data.parrilla.trim(),
    data.chapa_cajuela.trim(),
    data.facia_delantera.trim(),
    data.facia_trasera.trim(),
    data.parabrisas.trim(),
    data.medallon.trim(),
    data.salpicadera_izq.trim(),
    data.salpicadera_der.trim(),
    data.llanta_delantera_izq.trim(),
    data.llanta_delantera_der.trim(),
    data.espejo_lateral_izq.trim(),
    data.espejo_lateral_der.trim(),
    data.puerta_delantera_izq.trim(),
    data.puerta_delantera_der.trim(),
    data.chapa_puer_delant_izq.trim(),
    data.chapa_puer_delant_der.trim(),
    data.vidrio_puer_delantera_izq.trim(),
    data.vidrio_puer_delantera_der.trim(),
    data.puerta_trasera_izq.trim(),
    data.puerta_trasera_der.trim(),
    data.vidrio_puer_trasera_izq.trim(),
    data.vidrio_puer_trasera_der.trim(),
    data.chapa_puer_trasera_izq.trim(),
    data.chapa_puer_trasera_der.trim(),
    data.llanta_trasera_izq.trim(),
    data.llanta_trasera_der.trim(),
    data.indicadores.trim(),
    data.luces_funcionales.trim(),
    data.incluye_botiquin.trim(),
    data.danios_parabrisas.trim(),
    data.inmovilizador.trim(),
    data.direccionales_funcionales.trim(),
    data.aire_acon_funcional.trim(),
    data.gobernador_instalado.trim(),
    data.cinturones_seguridad.trim(),
    data.gps_telcel.trim(),
    data.bolsas_aire.trim(),
    data.alarma_funcional.trim(),
    data.proteccion_cargo.trim(),
    data.tapones_rines.trim(),
    "0",
    data.rin_izq_delantero.trim(),
    data.rin_der_delantero.trim(),
    data.rin_izq_trasero.trim(),
    data.rin_der_trasero.trim(),
    data.observaciones.trim(),
    data.comp_verifica.trim(),
    data.botiquin.trim(),
    data.placa_del.trim(),
    data.placa_tras.trim(),
    "P",
    data.user_name.trim(),
    data.pic_1.trim(),
    data.pic_2.trim(),
    data.pic_3.trim(),
    data.pic_4.trim(),
    data.pic_5.trim(),
    data.pic_6.trim(),
    data.pic_7.trim(),
    data.pic_8.trim(),
    data.pic_9.trim(),
    data.pic_10.trim(),
  ];
  console.log("params");

  console.log(params);
  try {
    if (params.includes(undefined) || params.includes(null)) {
      console.error("Array contiene valores undefined o null");
    }
    params = params.map((val) =>
      val !== undefined && val !== null ? val : ""
    );

    const query = `INSERT INTO KDS_CHECKLIST (c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,
            c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28,
            c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41,
            c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54,
            c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66, c67,
            c68, c69, c70, c71, c72, c73, c74, c75, c76, c77, c78, c79, c80,
            c81, c82, c83, c84, c85, c86, c87, c88, c89, c90, c91, c92, c93,
            c94, c95, c96, c97, c98
        ) VALUES (${params.map(() => "?").join(", ")})
        `;
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getFolio = async (data) => {
  return await connection.executeQuery(
    "SELECT TOP 1 c1 FROM KDS_CHECKLIST ORDER BY c1 DESC"
  );
};

KeplerModel.KDS_CHECKLIST = async (data) => {
  return await connection.executeQuery(
    "select TOP 1 * from KDS_CHECKLIST ORDER BY c1 DESC"
  );
};

KeplerModel.updateGastosVehicular = async (data) => {
  return await connection.executeQuery(
    `UPDATE kds_gastos_vehicular SET c27 = '${data.status}',c28 = '${data.approved_name}',c29 = '${data.date_approved}' WHERE c1 = '${data.id}';`
  );
};

KeplerModel.updateStatusGasto = async (data) => {
  return await connection.executeQuery(
    `UPDATE kds_gastos_vehicular SET c33 = '${data.status_gasto}' WHERE c1 = '${data.id}';`
  );
};

KeplerModel.updateckdsCardexVehiculos = async (data) => {
  return await connection.executeQuery(
    `UPDATE kds_cardex_vehiculos SET c33 = '${data.km}' WHERE c1 = '${data.id}';`
  );
};

KeplerModel.saveValidation = async (data) => {
  console.log(data);
  let params = [
    data.folio_entrada.trim(),
    data.unidad_vehicular.trim(),
    data.concepto_accion.trim(),
    data.fecha_alta_entrada.trim(),
    data.quien_registra.trim(),
    data.nombre.trim(),
    data.km_entrada.trim(),
    data.modelo.trim(),
    data.placas.trim(),
    data.serie.trim(),
    data.responsable.trim(),
    data.estatus_autorizacion.trim(),
    data.foto_1_entrada.trim(),
    data.foto_2_entrada.trim(),
    data.foto_3_entrada.trim(),
    data.fecha_hora_validacion.trim(),
    data.fecha_alta_salida.trim(),
    "M",
    data.km_salida.trim(),
    data.foto_1_salida.trim(),
    data.foto_2_salida.trim(),
    data.foto_3_salida.trim(),
    data.fecha_validacion_salida.trim(),
    data.comentario_rechazo_entrada.trim(),
    data.comentario_rechazo_salida.trim(),
  ];
  try {
    if (params.includes(undefined) || params.includes(null)) {
      console.error("Array contiene valores undefined o null");
    }
    params = params.map((val) =>
      val !== undefined && val !== null ? val : ""
    );

    const query = `INSERT INTO kds_seguimiento_servicios (c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,
            c16, c17, c18, c19, c20, c21, c22, c23, c24, c25
        ) VALUES (${params.map(() => "?").join(", ")})
        `;
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.updateValidation = async (data) => {
  const folio = data.folio_entrada;
  delete data.folio_entrada;
  const updateQuery = `UPDATE kds_seguimiento_servicios SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;
  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(folio);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getValidationFolio = async () => {
  return await connection.executeQuery(
    "SELECT TOP 1 c1 FROM kds_seguimiento_servicios ORDER BY c1 DESC"
  );
};

KeplerModel.getValidations = async () => {
  return await connection.executeQuery(
    "SELECT * from kds_seguimiento_servicios"
  );
  // return await connection.executeQuery("UPDATE kds_seguimiento_servicios SET c1 = 'S-00000001' where c1 = 'S-000001'");
};

KeplerModel.updateCardexStatus = async (data) => {
  return await connection.executeQuery(
    `UPDATE kds_cardex_vehiculos SET c3 = '${data.status}' WHERE c1 = '${data.id}';`
  );
};

KeplerModel.saveKdsKilometrajeGps = async (data) => {
  data = Object.assign({}, data);
  // console.log(data);
  // let existingRecord = await connection.executeQuery(
  //   `SELECT 1 FROM kds_kilometrajegps WHERE c2 = '${data.unidad}' AND c3 = '${data.fecha}' ;`
  // );

  // if (existingRecord.data[0].length == 0) {
  let params = [data.unidad.trim(), data.fecha.trim(), data.kilometraje.trim()];
  const query = `INSERT INTO kds_kilometrajegps (c2,c3,c4) VALUES (${params
    .map(() => "?")
    .join(", ")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
  // } else {
  //   return { status: true };
  // }
};

KeplerModel.updateEstatusCardex = async (data) => {
  console.log("updateEstatusCardex");
  console.log(data);
  return await connection.executeQuery(
    `UPDATE kds_cardex_vehiculos SET c3 = '${data.estatus_cardex}', c34 = '${data.km}' WHERE c1 = '${data.id}';`
  );
};

KeplerModel.kdsEventos = async (data) => {
  let id = await connection.executeQuery(
    "SELECT TOP 1 c1 FROM kds_eventos ORDER BY c1 DESC"
  );
  let lastFolio = id.data[0][0].c1;
  const splitFolio = lastFolio.split("-");
  let number = parseInt(splitFolio[1]);
  number++;
  const paddedNumber = number.toString().padStart(8, "0");
  const newFolio = `E-${paddedNumber}`;
  let params = [
    newFolio,
    data.unidad_vehicular.trim(),
    data.concepto_accion.trim(),
    data.fecha_alta_entrada.trim(),
    data.quien_registra.trim(),
    data.nombre.trim(),
    data.km_evento.trim(),
    data.modelo.trim(),
    data.placas.trim(),
    data.serie.trim(),
    data.responsable.trim(),
    data.estatus_autorizacion.trim(),
    data.foto_1_entrada.trim(),
    data.foto_2_entrada.trim(),
    data.foto_3_entrada.trim(),
    data.fecha_hora_validacion.trim(),
    data.aprobador.trim(),
    data.estatus_kepler_cardex.trim(),
  ];
  const query = `INSERT INTO kds_eventos(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18) VALUES (${params
    .map(() => "?")
    .join(", ")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getKdsEventos = async () => {
  return await connection.executeQuery("SELECT * from kds_eventos");
  // return await connection.executeQuery("DELETE from kds_eventos where c1 = 'E-0000001'");
};

KeplerModel.updateKdsEventos = async (data) => {
  const folio = data.folio;
  delete data.folio;
  const updateQuery = `UPDATE kds_eventos SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(folio);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getkdsCobranzaSeg = async () => {
  return await connection.executeQuery("SELECT * from kds_CobranzaSeg");
};

KeplerModel.updatekdsCobranzaSeg = async (data) => {
  const folio = data.folio;
  delete data.folio;
  const updateQuery = `UPDATE kds_CobranzaSeg SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c6 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(folio);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getKdsNivelesCobranza = async () => {
  return await connection.executeQuery("SELECT * from kds_NivelesCobranza");
};

KeplerModel.savekdsCobranzaLog = async (data) => {
  let id = await connection.executeQuery(
    "SELECT TOP 1 c1 FROM kds_CobranzaLog ORDER BY c1 DESC"
  );
  let lastFolio = id.data[0][0].c1;
  let number = parseInt(lastFolio);
  number++;
  let params = [
    number,
    data.folio_factura.trim(),
    data.niveles.trim(),
    data.subcategoria.trim(),
    data.usuario.trim(),
    data.fecha.trim(),
  ];
  const query = `INSERT INTO kds_CobranzaLog(c1,c2,c3,c4,c5,c6,c7) VALUES (${params
    .map(() => "?")
    .join(", ")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.saveKdsGastosK = async (data) => {
  let params = [
    data.id_grupo_gasto.trim(),
    data.folio_gasto.trim(),
    data.motivo_gasto.trim(),
    data.comentario_gasto.trim(),
    data.motivo_rechazos.trim(),
    data.departamento.trim(),
    data.zona.trim(),
    data.nombre_solicitante.trim(),
    data.apellido_solicitante.trim(),
    data.fecha_gasto.trim(),
    data.aprobacion_segundo_nivel.trim(),
    data.aprobacion_primer_nivel.trim(),
    data.aprobador_2.trim(),
    data.nombre_aprobador_1.trim(),
    data.apellido_aprobador_1.trim(),
    data.estatus_gasto.trim(),
    data.expense_type_description.trim(),
    data.name_prov.trim(),
    data.extra_1.trim(),
    data.extra_2.trim(),
  ];
  const query = `INSERT INTO kds_GastosK(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20) VALUES (${params
    .map(() => "?")
    .join(", ")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.updateKdsGastosK = async (data) => {
  return await connection.executeQuery(
    `UPDATE kds_cardex_vehiculos SET c16 = '${data.estatus_gasto}' c5 = '${data.motivo_rechazo}' WHERE c1 = '${data.id}';`
  );
};

KeplerModel.insertKdsBajasRh = async (data) => {
  let params = [
    data.nombrePersonal.trim(),
    data.departamentos.trim(),
    data.puestoTrabajo.trim(),
    data.email.trim(),
    data.fechaDespido.trim(),
    data.estado.trim(),
  ];
  const query = `INSERT INTO kds_bajasRH(c1,c2,c3,c4,c5,c6) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.insertKdsPersonalRh = async (data) => {
  let params = [
    data.codigo.trim(),
    data.nombre.trim(),
    data.apellido.trim(),
    data.genero.trim(),
    data.cumpleanios.trim(),
    data.curp.trim(),
    data.rfc.trim(),
    data.nss.trim(),
    data.email.trim(),
    data.telefono.trim(),
    data.lugarTrabajo.trim(),
    data.estado.trim(),
    data.puesto.trim(),
    data.contrasenia.trim(),
    data.domicilio.trim(),
    data.estadoCivil.trim(),
    data.direccionActual.trim(),
    data.nacion.trim(),
    data.lugarNacimiento.trim(),
    data.religion.trim(),
    data.identificacionCiudadana.trim(),
    data.fechaEmision.trim(),
    data.lugarEmision.trim(),
    data.residente.trim(),
    data.numeroCuentaBancaria.trim(),
    data.nombreCuentaBancaria.trim(),
    data.banco.trim(),
    data.codigoFiscalPersonal.trim(),
    data.nombreContacto.trim(),
    data.telefonoContacto.trim(),
    data.parentescoContacto.trim(),
    data.staff.trim(),
  ];
  const query = `INSERT INTO kds_PersonalRH(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.insertKdsPuestosRh = async (data) => {
  let params = [
    data.codigo.trim(),
    data.nombre.trim(),
    data.tipoPuesto.trim(),
    data.zona.trim(),
    data.rol.trim(),
    data.departamentos.trim(),
    data.tipoContrato.trim(),
    data.salarioMensual.trim(),
    data.salarioFiscal.trim(),
    data.clientes.trim(),
    data.ubicacion.trim(),
    data.equipoMateriales.trim(),
    data.periodoPago.trim(),
    data.cantidadPagarPeriodo.trim(),
    data.bonos.trim(),
    data.otrosIngresos.trim(),
    data.sumaTotal.trim(),
    data.licenciaManejo.trim(),
    data.rolTurnos.trim(),
    data.detalleRolar.trim(),
    data.examenesMedicos.trim(),
    data.capacitacionConCliente.trim(),
    data.detalleCapacitacion.trim(),
    data.diasLaborales.trim(),
    data.descripcionPuesto.trim(),
    data.staff.trim(),
  ];

  const query = `INSERT INTO kds_puestosRH(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.updateKdsPuestosRh = async (data) => {
  console.log(data);
  const codigo = data.codigo;
  delete data.codigo;
  const updateQuery = `UPDATE kds_puestosRH SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(codigo);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.updateKdsPersonalRh = async (data) => {
  const codigo = data.codigo;
  delete data.codigo;
  const updateQuery = `UPDATE kds_PersonalRH SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(codigo);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getKdsPresupuestoC = async (id) => {
  return await connection.executeQuery(
    `SELECT * FROM kds_presupuestoC WHERE c2 = '${id}'`
  );
};

KeplerModel.getKdsKdiiC = async (id = null) => {
  console.log(id);
  if (id) {
    return await connection.executeQuery(
      `SELECT * FROM kds_kdiiC WHERE c1 = '${id}'`
    );
  } else {
    return await connection.executeQuery(`SELECT * FROM kds_kdiiC`);
  }
};

KeplerModel.getKdsControllUnidades = async (id) => {
  // return await connection.executeQuery(
  //   `SELECT TOP 1 c1 FROM kds_controlUnidades ORDER BY c1 DESC`
  // );
  return await connection.executeQuery(
    `SELECT TOP 1 CAST(c1 AS INT) AS c1 FROM kds_controlUnidades ORDER BY c1 DESC`
  );
};

KeplerModel.insertKdsControllUnidades = async (data) => {
  data = Object.assign({}, data);
  // console.log(data);
  // let existingRecord = await connection.executeQuery(
  //   `SELECT 1 FROM kds_controlUnidades WHERE c2 = '${data.unidad}' AND c3 = '${data.fecha}' ;`
  // );

  // if (existingRecord.data[0].length == 0) {
  let id = await connection.executeQuery(
    "SELECT ISNULL(MAX(CAST(c1 AS INT)), 0) + 1 AS nextId FROM kds_controlUnidades WITH (UPDLOCK, HOLDLOCK);"
  );
  let lastFolio = id.data[0][0].nextId;
  let number = parseInt(lastFolio);
  number++;
  let params = [
    number,
    data.unidad.trim(),
    data.fecha.trim(),
    data.kilometraje.trim(),
    data.estatus.trim(),
  ];
  const query = `INSERT INTO kds_controlUnidades(c1,c2,c3,c4,c5) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
  // } else {
  //   return { status: true };
  // }
};

KeplerModel.insertKdsSolicitudUnidades = async (data) => {
  let id = await connection.executeQuery(
    "SELECT TOP 1 CAST(c1 AS INT) AS c1 FROM kds_SolicitudUnidades ORDER BY c1 DESC"
  );
  let lastFolio = id.data[0][0].c1;
  let number = parseInt(lastFolio);
  number++;
  let params = [
    number,
    data.tipoSolicitud.trim(),
    data.fechaSolicitudCreacion.trim(),
    data.unidad.trim(),
    data.zona.trim(),
    data.region.trim(),
    data.usuarioResponsable.trim(),
    data.tipoUnidad.trim(),
    data.estatus.trim(),
    data.cotizacion.trim(),
    data.entregaDocumentos.trim(),
    data.anticipos.trim(),
    data.fechaCompromiso.trim(),
    data.fechaEntregado.trim(),
    data.emplacamiento.trim(),
    data.seguro.trim(),
    data.rotulado.trim(),
    data.verificacion.trim(),
    data.gps.trim(),
    data.fechaEntregaOperaciones.trim(),
    data.gobernador.trim(),
  ];
  const query = `INSERT INTO kds_SolicitudUnidades(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.updateKdsSolicitudUnidades = async (data) => {
  const codigo = data.id;
  delete data.id;
  const updateQuery = `UPDATE kds_SolicitudUnidades SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(codigo);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getKdsSolicitudUnidades = async () => {
  return await connection.executeQuery(`SELECT * FROM kds_SolicitudUnidades`);
};

KeplerModel.insertKdsSolictudGastos = async (data) => {
  let params = [
    data.c1.trim(),
    data.c2.trim(),
    data.c3.trim(),
    data.c4.trim(),
    data.c5.trim(),
    data.c6.trim(),
    data.c7.trim(),
    data.c8.trim(),
    data.c9.trim(),
    data.c10.trim(),
    data.c11.trim(),
    data.c12.trim(),
    data.c13.trim(),
    data.c14.trim(),
    data.c15.trim(),
    data.c16.trim(),
    data.c17.trim(),
  ];
  const query = `INSERT INTO kds_solictud_gastos(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};
KeplerModel.insertKdsTransferGastos = async (data) => {
  let params = [
    data.c1.trim(),
    data.c2.trim(),
    data.c3.trim(),
    data.c4.trim(),
    data.c5.trim(),
    data.c6.trim(),
    data.c7.trim(),
    data.c8.trim(),
    data.c9.trim(),
    data.c10.trim(),
    data.c11.trim(),
    data.c12.trim(),
    data.c13.trim(),
    data.c14.trim(),
    data.c15.trim(),
  ];
  const query = `INSERT INTO kds_transfer_gastos(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.insertKdsXmlGastosAprobado = async (data) => {
  let params = [
    data.c1.trim(),
    data.c2.trim(),
    data.c3.trim(),
    data.c4.trim(),
    data.c5.trim(),
    data.c6.trim(),
    data.c7.trim(),
    data.c8.trim(),
    data.c9.trim(),
    data.c10.trim(),
    data.c11.trim(),
    data.c12.trim(),
    data.c13.trim(),
    data.c14.trim(),
    data.c15.trim(),
    data.c16.trim(),
    data.c17.trim(),
  ];
  const query = `INSERT INTO kds_xml_gastos_aprobado(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.insertKdsItemsGastos = async (data) => {
  let id = await connection.executeQuery(
    "SELECT ISNULL(MAX(CAST(c1 AS INT)), 0) + 1 AS nextId FROM kds_items_gastos WITH (UPDLOCK, HOLDLOCK)"
  );
  console.log(id);
  let lastFolio = id.data[0][0].nextId;
  let number = parseInt(lastFolio);
  let params = [
    number,
    data.c2.trim(),
    data.c3.trim(),
    data.c4.trim(),
    data.c5.trim(),
    data.c6.trim(),
    data.c7.trim(),
    data.c8.trim(),
    data.c9.trim(),
    data.c10.trim(),
    data.c11.trim(),
    data.c12.trim(),
    data.c13.trim(),
    data.c14.trim(),
    data.c15.trim(),
  ];
  const query = `INSERT INTO kds_items_gastos(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.updateKdsSolictudGastos = async (data) => {
  const codigo = data.c1;
  delete data.c1;
  const updateQuery = `UPDATE kds_solictud_gastos SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(codigo);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.updateKdsTransferGastos = async (data) => {
  const codigo = data.c1;
  delete data.c1;
  const updateQuery = `UPDATE kds_transfer_gastos SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(codigo);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};
KeplerModel.updateKdsXmlGastosAprobado = async (data) => {
  const codigo = data.c1;
  delete data.c1;
  const updateQuery = `UPDATE kds_xml_gastos_aprobado SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c1 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(codigo);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};
KeplerModel.updateKdsItemsGastos = async (data) => {
  const c9 = data.c9;
  const c13 = data.c13;
  delete data.c9;
  delete data.c13;
  const updateQuery = `UPDATE kds_items_gastos SET ${Object.keys(data)
    .map((key, index) => `${key} = ?`)
    .join(", ")} WHERE c9 = ? and c13 = ?;`;

  try {
    const params = Object.keys(data).map((key) => data[key].trim());
    params.push(c9);
    params.push(c13);
    await sequelize.query(updateQuery, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getKdii = async () => {
  return await connection.executeQuery(`select * from kdii`);
};

KeplerModel.insertKdsSolicitudMaterial = async (data) => {
  // let id = await connection.executeQuery(
  //   "SELECT ISNULL(MAX(CAST(c1 AS INT)), 0) + 1 AS nextId FROM kds_Solicitud_Material WITH (UPDLOCK, HOLDLOCK)"
  // );
  // console.log(id);
  // let lastFolio = id.data[0][0].nextId;
  // let number = parseInt(lastFolio);
  let params = [
    // number,
    data.c1.trim(),
    data.c2.trim(),
    data.c3.trim(),
    data.c4.trim(),
    data.c5.trim(),
    data.c6.trim(),
    data.c7.trim(),
    data.c8.trim(),
    data.c9.trim(),
    data.c10.trim(),
    data.c11.trim(),
    data.c12.trim(),
    data.c13.trim(),
    data.c14.trim(),
    data.c15.trim(),
  ];
  const query = `INSERT INTO kds_Solicitud_Material(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.getKdiiTotal = async () => {
  return await connection.executeQuery(
    `SELECT *, (C4 + C8 - C9) AS EXISTENCIA_TOTAL FROM KDIL`
  );
};

KeplerModel.insertKdsSolictudGastosDescuento = async (data) => {
  let id = await connection.executeQuery(
    "SELECT ISNULL(MAX(CAST(c1 AS INT)), 0) + 1 AS nextId FROM kds_solictud_gastos_descuento WITH (UPDLOCK, HOLDLOCK)"
  );
  let lastFolio = id.data[0][0].nextId;
  let c1Column = parseInt(lastFolio);
  let params = [
    c1Column,
    data.c2.trim(),
    data.c3.trim(),
    data.c4.trim(),
    data.c5.trim(),
    data.c6.trim(),
    data.c7.trim(),
    data.c8.trim(),
    data.c9.trim(),
    data.c10.trim(),
    data.c11.trim(),
    data.c12.trim(),
    data.c13.trim(),
    data.c14.trim(),
    data.c15.trim(),
    data.c16.trim(),
    data.c17.trim(),
  ];
  const query = `INSERT INTO kds_solictud_gastos_descuento(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

KeplerModel.insertKdsXmlGastosAprobadoDescuen = async (data) => {
  let id = await connection.executeQuery(
    "SELECT ISNULL(MAX(CAST(c1 AS INT)), 0) + 1 AS nextId FROM kds_xml_gastos_aprobadoDescuen WITH (UPDLOCK, HOLDLOCK)"
  );
  let lastFolio = id.data[0][0].nextId;
  let c1Column = parseInt(lastFolio);
  let params = [
    c1Column,
    data.c2.trim(),
    data.c3.trim(),
    data.c4.trim(),
    data.c5.trim(),
    data.c6.trim(),
    data.c7.trim(),
    data.c8.trim(),
    data.c9.trim(),
    data.c10.trim(),
    data.c11.trim(),
    data.c12.trim(),
    data.c13.trim(),
    data.c14.trim(),
    data.c15.trim(),
    data.c16.trim(),
    data.c17.trim(),
  ];
  const query = `INSERT INTO kds_xml_gastos_aprobadoDescuen(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17) VALUES (${params
    .map(() => "?")
    .join(",")})`;
  try {
    await sequelize.query(query, {
      replacements: params,
    });
    return { status: true };
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return { status: false, message: error };
  }
};

// KeplerModel.getKdsKdiiC = async (id) => {
//   return await connection.executeQuery(`SELECT * FROM kds_kdiiC`);
// };
KeplerModel.getKdil = async (id) => {
  return await connection.executeQuery(`SELECT * FROM kdil`);
};
module.exports = KeplerModel;
