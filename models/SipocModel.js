const connection = require('./../database/conection')
const SipocModel = () => {}

SipocModel.getlln = async()=>{
    return await connection.executeQuery('select top 100 * from LLN')
}

module.exports = SipocModel