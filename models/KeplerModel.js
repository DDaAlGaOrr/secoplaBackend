const connection = require('./../database/kepler')
const ClienteModel = () => {}

ClienteModel.getUsers = async()=>{
    return connection.executeQuery('select  * from sysuser')
}

module.exports = ClienteModel