const { query } = require('mssql');
const connection = require('./../database/kepler')
const KeplerModel = () => {}

KeplerModel.existUser = async(username)=>{
    const result = await connection.executeQuery(`SELECT c1 FROM KDS_USUARIOS_CUENTAS WHERE c1 = '${username}'`);
    console.log(result.data)
    if(result.data){
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

  KeplerModel.getClientById = async(id)=>{
    return await connection.executeQuery(`SELECT * FROM Kdudent WHERE c1 = '${id}'`) 
  }
  

module.exports = KeplerModel