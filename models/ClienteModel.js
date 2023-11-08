const connection = require('./../database/conection')
const ClienteModel = () => {}

ClienteModel.getClientes = async()=>{
    return await connection.executeQuery(`SELECT top 100 * from Cat_Clientes`)
}

module.exports = ClienteModel