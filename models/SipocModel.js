const connection = require('./../database/conection')
const SipocModel = () => {}

SipocModel.getlln = async()=>{
    return await connection.executeQuery('select top 100 * from LLN')
}

SipocModel.getClientServices = async(id_client)=>{
    return await connection.executeQuery(
    `select Tipo_Control, Num_area, Num_trampa, Area, Fecha_Servicio from EDC where Id_Cliente='${id_client}' and id_estatus=3 and (Fecha_Servicio BETWEEN '2023-06-01' AND '2023-12-31') UNION
    select Tipo_Control, Num_area, Num_trampa, Area, Fecha_Servicio from EDCM where Id_Cliente='${id_client}' and id_estatus=3 and (Fecha_Servicio BETWEEN '2023-06-01' AND '2023-12-31') UNION
    select Tipo_Control, Num_area, Num_trampa, Area, Fecha_Servicio from LLN where Id_Cliente='${id_client}' and id_estatus=3 and (Fecha_Servicio BETWEEN '2023-06-01' AND '2023-12-31') UNION
    select Tipo_Control, Num_area, NULL AS Num_trampa, Area, Fecha_Servicio from RNP where Id_Cliente='${id_client}' and id_estatus=3 and (Fecha_Servicio BETWEEN '2023-06-01' AND '2023-12-31')`)
}

module.exports = SipocModel