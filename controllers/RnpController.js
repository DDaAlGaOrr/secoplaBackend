const RnpModel = require('./../models/RnpModel')
const RnpController = () => {};

RnpController.getRnp = async (req,res)=>{
    const data = await RnpModel.getRnp()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = RnpController