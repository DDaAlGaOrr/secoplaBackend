const ClienteModel = require('./../models/ClienteModel')
const ClienteController = () => {};

ClienteController.getClientes = async (req,res)=>{
    const data = await ClienteModel.getClientes()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = ClienteController