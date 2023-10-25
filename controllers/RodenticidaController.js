const RodenticidaModel = require('./../models/RodenticidaModel')
const RodenticidaController = ()=>{}

RodenticidaController.getRodenticidas = async(req,res)=>{
    const data = await RodenticidaModel.getCatRodenticida()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = RodenticidaController;