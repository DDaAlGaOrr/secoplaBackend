const SipocModel = require('./../models/SipocModel')
const SipocController = ()=>{}

SipocController.getlln = async(req,res)=>{
    const data = await SipocModel.getlln()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}
SipocController.getClientServices = async(req,res)=>{
    let id_client = req.params.client
    const data = await SipocModel.getClientServices(id_client)
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = SipocController;