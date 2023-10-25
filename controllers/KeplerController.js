const KeplerModel = require('./../models/KeplerModel')
const KeplerController = () => {};

KeplerController.getUsers = async (req,res)=>{
    const data = await KeplerModel.getUsers()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = KeplerController