const connection = require('./../database/conection')
const connectionkepler = require('./../database/kepler')
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

SipocModel.getSubsidiaryClient = async(id_client)=>{
    //que vengan los clientes con sus plantas y las plantas con sus tipos de control (edc, edcm, LLN, RNP) y los tipos de control con sus areas (cinturones)   y las Areas con sus trampas trampas
    const client = await connectionkepler.executeQuery(`select kdud.c2 as id_cliente, kdud.c3 as nombre_cliente, kdudent.c2 as id_planta,kdudent.c12 as nombre_planta from kdud inner join kdudent on kdud.c2 = kdudent.c1 where kdud.c2 =${id_client}`)
    return client
}

SipocModel.getSubsidiaryServices = async(id_subsidiaries) => {
    const clients = [];
    const services = []

    for (const id_subsidiary of id_subsidiaries) {
        let result = await connection.executeQuery(`SELECT Id_Cliente, Num_Cliente,Razon FROM Cat_Clientes WHERE Num_Cliente = '${id_subsidiary}'`);
        clients.push(result.data[0][0]);
    }
    for (const client of clients) {

        let edc = await connection.executeQuery(`select Id_EDC,Id_Cliente,Id_Usuario from EDC where Id_Cliente = ${client.Id_Cliente}`);
        let edcm = await connection.executeQuery(`select Id_EDCM,Id_Cliente,Id_Usuario from EDCM where Id_Cliente = ${client.Id_Cliente}`);
        let rnp = await connection.executeQuery(`select Id_RNP,Id_Cliente,Id_Usuario from RNP where Id_Cliente = ${client.Id_Cliente}`);
        let lln = await connection.executeQuery(`select Id_LLN,Id_Cliente,Id_Usuario from LLN where Id_Cliente = ${client.Id_Cliente}`);
        const clientData = {
            client: [client], // Datos del cliente en un array
            servicios: {
              edc: edc.data[0],
              edcm: edcm.data[0],
              rnp: rnp.data[0],
              lln: lln.data[0]
            }
          };
          services.push(clientData)
        // services.edc.push(edc.data[0]);
        // services.client.push(client)
        // services.edcm.push(edcm.data[0]);
        // services.rnp.push(rnp.data[0]);
        // services.lln.push(lln.data[0]);
    }
    

    return services;
}

module.exports = SipocModel