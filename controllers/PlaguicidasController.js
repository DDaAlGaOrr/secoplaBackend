const PlaguicidasModel = require('./../models/PlaguicidaModel')
const PlaguicidasController = () => {};

PlaguicidasController.getPlaguicidas = async (req,res)=>{
    const data = await PlaguicidasModel.getCatPlaguicida()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = PlaguicidasController;