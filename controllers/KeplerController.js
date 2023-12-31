const KeplerModel = require('./../models/KeplerModel')
const KeplerController = () => {};


KeplerController.auth = async(req,res)=>{
    const username = req.body.username 
    const password = req.body.password 

    const existsUser = await KeplerModel.existUser(username)
    if(!existsUser){
        const response = {
            status:'error',
            message: 'usuario no encontrado'
        }
        return res.status(404).json(response)
    }
    // const passwordMatch = await KeplerModel.passwordMatch(password)
    if(password !="$3c0pl4"){
        const response = {
            status:'error',
            message: 'contraseña incorrecta'
        }
        return res.status(404).json(response)
    }
    const response = {
        status:'success',
        message: ''
    }
    return res.status(200).json(response)
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

KeplerController.searchClient = async (req,res)=>{
    let key = req.params.client
    const data = await KeplerModel.searchClient(key)
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getSubsidiaryClient = async (req,res)=>{
    let id_client = req.params.client
    const data = await KeplerModel.getSubsidiaryClient(id_client)
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

KeplerController.getClientById = async (req,res)=>{
    let id_client = req.params.client
    const data = await KeplerModel.getClientById(id_client)
    const response = {
        status:'success',
        data: data
    }
    return res.status(200).json(response);
}

module.exports = KeplerController