const connection = require('./../database/conection')
const LinModel = () => {}

LinModel.getLin = async()=>{
    return await connection.executeQuery('select * from LIN')
}

module.exports = LinModel