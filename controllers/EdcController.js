const EdcModel = require('./../models/EdcModel')
const EdcController = () => {};

EdcController.getEdc = async (req,res)=>{
    const data = await EdcModel.getEdc()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = EdcController