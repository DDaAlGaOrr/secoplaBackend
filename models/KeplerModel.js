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
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
`;
    console.log(data)
    const params = [
        data.folio,
        data.num_economico,
        data.placas,
        'fecha',
        data.km,
        data.responsable,
        data.telefono,
        data.zona,
        data.region,
        data.region,
        data.bolsa_herramienta,
        data.poliza_seguro,
        data.gato_manivel,
        data.tarjeta_gasolina,
        data.engomado,
        data.reflejantes,
        data.tag,
        data.poliza_garantia,
        data.llanta_refaccion,
        data.manual_conductor,
        data.poliza_asistencia,
        data.aceite_motor,
        data.presion_llantas,
        data.anticongelante,
        data.liquido_frenos,
        data.aceite_hidra,
        data.limpia_parabrisas,
        'limpia parabrisas',
        data.interiores_buenos,
        data.nivel_combustible,
        data.faro_izquierdo,
        data.calavera_izquierda,
        data.faro_derecho,
        data.calavera_derecha,
        data.cofre,
        data.cajuela,
        data.parrilla,
        data.chapa_cajuela,
        data.facia_delantera,
        data.facia_trasera,
        data.parabrisas,
        data.medallon,
        data.salpicadera_izq,
        data.salpicadera_der,
        data.llanta_delantera_izq,
        data.llanta_delantera_der,
        data.espejo_lateral_izq,
        data.espejo_lateral_der,
        data.puerta_delantera_izq,
        data.puerta_delantera_der,
        data.chapa_puer_delant_izq,
        data.chapa_puer_delant_der,
        data.vidrio_puer_delantera_izq,
        data.vidrio_puer_delantera_der,
        data.puerta_trasera_izq,
        data.puerta_trasera_der,
        data.vidrio_puer_trasera_izq,
        data.vidrio_puer_trasera_der,
        data.chapa_puer_trasera_izq,
        data.chapa_puer_trasera_der,
        data.llanta_trasera_izq,
        data.llanta_trasera_der,
        data.indicadores,
        data.luces_funcionales,
        data.incluye_botiquin,
        data.danios_parabrisas,
        data.inmovilizador,
        data.direccionales_funcionales,
        data.aire_acon_funcional,
        data.gobernador_instalado,
        data.cinturones_seguridad,
        data.gps_telcel,
        data.bolsas_aire,
        data.alarma_funcional,
        data.proteccion_cargo,
        data.tapones_rines,
        data.rin_izq_delantero,
        data.rin_der_delantero,
        data.rin_izq_trasero,
        data.rin_der_trasero,
        'Comentarios',
        data.comp_verifica,
        data.botiquin,
        data.placa_del,
        data.placa_tras,
        'Estatus'
    ];

    return await connection.executeQuery(query, params)
}

KeplerModel.getFolio = async (data) => {
    return await connection.executeQuery("SELECT TOP 1 c1 FROM KDS_CHECKLIST ORDER BY c1 DESC");
}

KeplerModel.updateGastosVehicular = async (data) => {
    return await connection.executeQuery(`UPDATE kds_gastos_vehicular SET c27 = '${data.status}' WHERE c1 = '${data.id}';`)
}

module.exports = KeplerModel