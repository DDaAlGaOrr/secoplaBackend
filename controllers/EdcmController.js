const EdcmModel = require('./../models/EdcmModel')
const EdcmController = () => {};

EdcmController.getEdcm = async (req,res)=>{
    const data = await EdcmModel.getEdcm()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = EdcmController