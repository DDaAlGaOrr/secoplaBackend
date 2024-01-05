const connection = require('./../database/conection')
const ClienteModel = () => {}

ClienteModel.getClientes = async()=>{
    return await connection.executeQuery(`SELECT Id_Cliente,Num_Cliente from Cat_Clientes`)
}

module.exports = ClienteModel