const connection = require('./../database/conection')
const LinModel = () => {}

LinModel.getLin = async()=>{
    return await connection.executeQuery('select top 100 * from LLN')
}

module.exports = LinModel