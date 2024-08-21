const { query } = require('mssql');
const connection = require('./../database/kepler')
const KeplerModel = () => { }

KeplerModel.existUser = async (username) => {
    const result = await connection.executeQuery(`SELECT c1 FROM KDS_USUARIOS_CUENTAS WHERE c1 = '${username}'`);
    console.log(result.data)
    if (result.data) {
        return true
    } else {
        return false
    }
    // if(result && result.data){
    //     return result
    // }
    // else{
    //     return false 
    // }
}



KeplerModel.getUsers = async () => {
    return connection.executeQuery('select * from KDS_USUARIOS_CUENTAS')
}

KeplerModel.getUsers = async () => {
    return connection.executeQuery('select * from KDS_USUARIOS_CUENTAS')
}

KeplerModel.getKdms = async () => {
    return connection.executeQuery('select * from KDMS')
}

KeplerModel.getKdsRegion = async () => {
    return connection.executeQuery('select * from KDS_REGION')
}

KeplerModel.getKdsDirOpe = async () => {
    return connection.executeQuery('select * from kds_direcciones_ope')
}

KeplerModel.getKdsRegionSuc = async () => {
    return connection.executeQuery('select  * from kds_region_suc')
}

KeplerModel.getKdsDirRe = async () => {
    return connection.executeQuery('select  * from kds_direccion_reg')
}

KeplerModel.getKdud = async () => {
    return connection.executeQuery('select c2,c3,c9,c10,c27 from kdud')
}

KeplerModel.searchClient = async (key) => {
    try {
        const queryString = `SELECT C2 as user_id, C3 as client_name FROM kdud WHERE C3 LIKE '%${key}%'`;
        const result = await connection.executeQuery(queryString);
        return result.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

KeplerModel.getSubsidiaryClient = async (key) => {
    try {
        const queryString = `SELECT C1 as user_id, C2 as subsidiary_id, C12 subsidiary FROM kdudent WHERE C1 = '${key}'`;
        const result = await connection.executeQuery(queryString);
        return result.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

KeplerModel.getClientById = async (id) => {
    return await connection.executeQuery(`SELECT * FROM Kdudent WHERE c1 = '${id}'`)
}

KeplerModel.getkdsGastosVehicular = async () => {
    return await connection.executeQuery("select * from kds_gastos_vehicular")
}

KeplerModel.getKdsCardexVehiculos = async () => {
    return await connection.executeQuery("select * from kds_cardex_vehiculos")
}

KeplerModel.saveChecklist = async (data) => {
    const query = `
    INSERT INTO KDS_CHECKLIST (
        c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,
        c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, 
        c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, 
        c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, 
        c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66, c67,
        c68, c69, c70, c71, c72, c73, c74, c75, c76, c78, c79, c80, c81, 
        c82, c83, c84, c85, c86, c87
    ) VALUES (
        @value1, @value2, @value3, @value4, @value5, @value6, @value7, @value8, @value9, @value10, @value11, @value12, @value13, @value14, @value15,
        @value16, @value17, @value18, @value19, @value20, @value21, @value22, @value23, @value24, @value25, @value26, @value27, @value28, @value29, 
        @value30, @value31, @value32, @value33, @value34, @value35, @value36, @value37, @value38, @value39, @value40, @value41, @value42, @value43,
        @value44, @value45, @value46, @value47, @value48, @value49, @value50, @value51, @value52, @value53, @value54, @value55, @value56, @value57, 
        @value58, @value59, @value60, @value61, @value62, @value63, @value64, @value65, @value66, @value67, @value68, @value69, @value70, @value71, 
        @value72, @value73, @value74, @value75, @value76, @value78, @value79, @value80, @value81, @value82, @value83, @value84, @value85, @value86, 
        @value87
    )
`;
    const params = {
        value1: data.folio,
        value2: data.num_economico,
        value3: data.placas,
        value4: 'fecha',
        value5: data.km,
        value6: data.responsable,
        value7: data.telefono,
        value8: data.zona,
        value9: data.region,
        value10: data.region,
        value11: data.bolsa_herramienta,
        value12: data.poliza_seguro,
        value13: data.gato_manivel,
        value14: data.tarjeta_gasolina,
        value15: data.engomado,
        value16: data.reflejantes,
        value17: data.tag,
        value18: data.poliza_garantia,
        value19: data.llanta_refaccion,
        value20: data.manual_conductor,
        value21: data.poliza_asistencia,
        value22: data.aceite_motor,
        value23: data.presion_llantas,
        value24: data.anticongelante,
        value25: data.liquido_frenos,
        value26: data.aceite_hidra,
        value27: data.limpia_parabrisas,
        value28: 'limpia parabrisas',
        value29: data.interiores_buenos,
        value30: data.nivel_combustible,
        value31: data.faro_izquierdo,
        value32: data.calavera_izquierda,
        value33: data.faro_derecho,
        value34: data.calavera_derecha,
        value35: data.cofre,
        value36: data.cajuela,
        value37: data.parrilla,
        value38: data.chapa_cajuela,
        value39: data.facia_delantera,
        value40: data.facia_trasera,
        value41: data.parabrisas,
        value42: data.medallon,
        value43: data.salpicadera_izq,
        value44: data.salpicadera_der,
        value45: data.llanta_delantera_izq,
        value46: data.llanta_delantera_der,
        value47: data.espejo_lateral_izq,
        value48: data.espejo_lateral_der,
        value49: data.puerta_delantera_izq,
        value50: data.puerta_delantera_der,
        value51: data.chapa_puer_delant_izq,
        value52: data.chapa_puer_delant_der,
        value53: data.vidrio_puer_delantera_izq,
        value54: data.vidrio_puer_delantera_der,
        value55: data.puerta_trasera_izq,
        value56: data.puerta_trasera_der,
        value57: data.vidrio_puer_trasera_izq,
        value58: data.vidrio_puer_trasera_der,
        value59: data.chapa_puer_trasera_izq,
        value60: data.chapa_puer_trasera_der,
        value61: data.llanta_trasera_izq,
        value62: data.llanta_trasera_der,
        value63: data.indicadores,
        value64: data.luces_funcionales,
        value65: data.incluye_botiquin,
        value66: data.danios_parabrisas,
        value67: data.inmovilizador,
        value68: data.direccionales_funcionales,
        value69: data.aire_acon_funcional,
        value70: data.gobernador_instalado,
        value71: data.cinturones_seguridad,
        value72: data.gps_telcel,
        value73: data.bolsas_aire,
        value74: data.alarma_funcional,
        value75: data.proteccion_cargo,
        value76: data.tapones_rines,
        value78: data.rin_izq_delantero,
        value79: data.rin_der_delantero,
        value80: data.rin_izq_trasero,
        value81: data.rin_der_trasero,
        value82: 'Comentarios',
        value83: data.comp_verifica,
        value84: data.botiquin,
        value85: data.placa_del,
        value86: data.placa_tras,
        value87: 'Estatus'
    };

    return await connection.executeQuery(query, params)
}

KeplerModel.getFolio = async (data) => {
    return await connection.executeQuery("SELECT TOP 1 c1 FROM KDS_CHECKLIST ORDER BY c1 DESC");
}

KeplerModel.updateGastosVehicular = async (data) => {
    return await connection.executeQuery(`UPDATE kds_gastos_vehicular SET c27 = '${data.status}' WHERE c1 = '${data.id}';`)
}

module.exports = KeplerModel