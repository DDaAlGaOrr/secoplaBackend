const connection = require('./../database/conection')
const AreaGatoModel = () => {}

AreaGatoModel.getAreaGato = async()=>{
    return await connection.executeQuery('select * from Area_Gato')
}

AreaGatoModel.getEstadoGato = async()=>{
    return await connection.executeQuery('select * from Estado_Gato')
}

module.exports = AreaGatoModel