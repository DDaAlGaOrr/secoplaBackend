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
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: '',
        value15: '',
        value16: '',
        value17: '',
        value18: '',
        value19: '',
        value20: '',
        value21: '',
        value22: '',
        value23: '',
        value24: '',
        value25: '',
        value26: '',
        value27: '',
        value28: '',
        value29: '',
        value30: '',
        value31: '',
        value32: '',
        value33: '',
        value34: '',
        value35: '',
        value36: '',
        value37: '',
        value38: '',
        value39: '',
        value40: '',
        value41: '',
        value42: '',
        value43: '',
        value44: '',
        value45: '',
        value46: '',
        value47: '',
        value48: '',
        value49: '',
        value50: '',
        value51: '',
        value52: '',
        value53: '',
        value54: '',
        value55: '',
        value56: '',
        value57: '',
        value58: '',
        value59: '',
        value60: '',
        value61: '',
        value62: '',
        value63: '',
        value64: '',
        value65: '',
        value66: '',
        value67: '',
        value68: '',
        value69: '',
        value70: '',
        value71: '',
        value72: '',
        value73: '',
        value74: '',
        value75: '',
        value76: '',
        value78: '',
        value79: '',
        value80: '',
        value81: '',
        value82: '',
        value83: '',
        value84: '',
        value85: '',
        value86: '',
        value87: ''
    };

    return await connection.executeQuery(query, params)
}

KeplerModel.getFolio = async (data) => {
    return await connection.executeQuery("SELECT TOP 1 c1 FROM KDS_CHECKLIST ORDER BY c1 DESC");
}

module.exports = KeplerModel