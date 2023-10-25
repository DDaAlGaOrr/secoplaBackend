const connection = require('./../database/conection')
const RodenticidaModel = () => {}

RodenticidaModel.getCatRodenticida = async()=>{
    return await connection.executeQuery('select * from Cat_Rodenticida')
}

module.exports = RodenticidaModel