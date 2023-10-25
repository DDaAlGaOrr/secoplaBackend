const connection = require('./../database/conection')
const EdcmModel = () => {}

EdcmModel.getEdcm = async()=>{
    return await connection.executeQuery('select top 100 * from EDCM')
}

module.exports = EdcmModel