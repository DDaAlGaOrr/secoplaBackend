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

SipocController.getClientservices = async(req,res)=>{
    let id_client = req.params.client
    const id_subsidiaries = []
    const subsidiaryClient = await SipocModel.getSubsidiaryClient(id_client)
   
    const subsidiaryServices = await SipocModel.getSubsidiaryServices(subsidiaryClient.data[0])
    return res.status(200).json(subsidiaryServices);
}
module.exports = SipocController;