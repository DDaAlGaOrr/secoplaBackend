const LinModel = require('./../models/LinModel')
const LinController = () => {};

LinController.getLin = async (req,res)=>{
    const data = await LinModel.getLin()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = LinController