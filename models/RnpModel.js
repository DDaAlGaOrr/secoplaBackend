const connection = require('./../database/conection')
const RnpModel = () => {}

RnpModel.getRnp = async()=>{
    return await connection.executeQuery('select top 100 * from RNP')
}

module.exports = RnpModel