const connection = require('./../database/conection')
const ClienteModel = () => {}

ClienteModel.getClientes = async()=>{
    return await connection.executeQuery(`SELECT * from EDCM where Id_Estatus = ${3}`)
}

module.exports = ClienteModel