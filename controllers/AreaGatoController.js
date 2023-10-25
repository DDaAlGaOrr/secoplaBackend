const AreaGatoModel = require('./../models/AreaGatoModel')
const AreaGatoController = () => {};

AreaGatoController.getAreaGato = async (req,res)=>{
    const data = await AreaGatoModel.getAreaGato()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

AreaGatoController.getEstadoGato = async(req,res)=>{
    const data = await AreaGatoModel.getEstadoGato()

    const response = {
        status:'success',
        data:data
    }
    return res.status(200).json(response)
}

module.exports = AreaGatoController;