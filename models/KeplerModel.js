const connection = require('./../database/kepler')
const KeplerModel = () => {}

KeplerModel.existUser = async(username)=>{
    const result = await connection.executeQuery(`SELECT c1 FROM KDS_USUARIOS_CUENTAS WHERE c1 = '${username}'`);
    if(result.data[0].length){
        return true
    }else{
        return false
    }
    // if(result && result.data){
    //     return result
    // }
    // else{
    //     return false 
    // }
}

KeplerModel.getUsers = async()=>{
    return connection.executeQuery('select * from KDS_USUARIOS_CUENTAS')
}

KeplerModel.getUsers = async()=>{
    return connection.executeQuery('select * from KDS_USUARIOS_CUENTAS')
}

KeplerModel.getKdms = async ()=>{
    return connection.executeQuery('select * from KDMS')
}

KeplerModel.getKdsRegion = async ()=>{
    return connection.executeQuery('select * from KDS_REGION')
}

KeplerModel.getKdsDirOpe = async ()=>{
    return connection.executeQuery('select * from kds_direcciones_ope')
}

KeplerModel.getKdsRegionSuc = async ()=>{
    return connection.executeQuery('select  * from kds_region_suc')
}

KeplerModel.getKdsDirRe = async ()=>{
    return connection.executeQuery('select  * from kds_direccion_reg')
}

KeplerModel.getKdud = async ()=>{
    return connection.executeQuery('select top 100 * from kdud')
}

module.exports = KeplerModel