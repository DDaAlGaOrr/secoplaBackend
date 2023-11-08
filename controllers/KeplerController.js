const KeplerModel = require('./../models/KeplerModel')
const KeplerController = () => {};


KeplerController.auth = async(req,res)=>{
    const username = req.body.username 
    const password = req.body.password 

    const existsUser = await KeplerModel.existUser(username)
    if(!existsUser){
        const response = {
            status:'error',
            data: 'usuario no encntrado'
        }
        return res.status(404).json(response)
    }
    const passwordMatch = await KeplerModel.passwordMatch(password)
}

KeplerController.getUsers = async (req,res)=>{
    const data = await KeplerModel.getUsers()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getKdms = async (req,res)=>{
    const data = await KeplerModel.getKdms()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getKdsRegion = async (req,res)=>{
    const data = await KeplerModel.getKdsRegion()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getKdsDirOpe = async (req,res)=>{
    const data = await KeplerModel.getKdsDirOpe()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getKdsRegionSuc = async (req,res)=>{
    const data = await KeplerModel.getKdsRegionSuc()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getKdsDirRe = async (req,res)=>{
    const data = await KeplerModel.getKdsDirRe()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getKdud = async (req,res)=>{
    const data = await KeplerModel.getKdud()
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = KeplerController