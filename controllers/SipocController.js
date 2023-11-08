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

module.exports = SipocController;