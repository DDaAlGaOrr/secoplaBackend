const connection = require('./../database/conection')
const PlaguicidasModel = () => {}

PlaguicidasModel.getCatPlaguicida = async()=>{
    return await connection.executeQuery('select * from Cat_Plaguicida')
}

module.exports = PlaguicidasModel