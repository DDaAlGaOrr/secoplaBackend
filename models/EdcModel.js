const connection = require('./../database/conection')
const EdcModel = () => {}

EdcModel.getEdc = async()=>{
    return await connection.executeQuery('select top 100 * from EDC')
}

module.exports = EdcModel