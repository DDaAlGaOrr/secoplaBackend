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
    subsidiaryClient.data[0].forEach(element => {
        id_subsidiaries.push(element.id_planta)
    });
    const subsidiaryServices = await SipocModel.getSubsidiaryServices(id_subsidiaries)
    // console.log(id_subsidiary)
    // const response = {
    //     status:'success',
    //     data: subsidiaryClient.data
    // }
    return res.status(200).json(subsidiaryServices);
}

module.exports = SipocController;