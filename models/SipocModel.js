const connection = require('./../database/conection')
const connectionkepler = require('./../database/kepler')
const SipocModel = () => {}

SipocModel.getlln = async()=>{
    return await connection.executeQuery('select top 100 * from LLN')
}


SipocModel.getSubsidiaryClient = async(id_client)=>{
    const client = await connectionkepler.executeQuery(`select kdud.c2 as id_cliente, kdud.c3 as nombre_cliente,kdud.c10 as rfc ,kdudent.c2 as id_planta,kdudent.c12 as nombre_planta from kdud inner join kdudent on kdud.c2 = kdudent.c1 where kdud.c2 =${id_client}`)
    return client
}

SipocModel.getSubsidiaryServices = async(id_subsidiaries) => {
    const clients = {
        sucursal:[],
        planta:[]
    };
    const services = []

    for (const subsidiary of id_subsidiaries) {
        let result = await connection.executeQuery(`SELECT Id_Cliente, Num_Cliente,Razon FROM Cat_Clientes WHERE Num_Cliente = '${subsidiary.id_planta}'`);
        clients.planta.push(result.data[0][0]);
        clients.sucursal.push(subsidiary);
    }
    for (const client of clients.planta) {
        let edc = await connection.executeQuery(`SELECT DISTINCT Area,Tipo_Control,Num_trampa FROM EDC WHERE Id_Cliente = ${client.Id_Cliente} and Id_Estatus = 3  AND CONVERT(DATE, Fecha) BETWEEN '2023-06-01' AND '2023-12-31'`);
        let edcm = await connection.executeQuery(`SELECT DISTINCT  Area,Tipo_Control,Num_trampa FROM EDCM WHERE Id_Cliente = ${client.Id_Cliente} and Id_Estatus = 3  AND CONVERT(DATE, Fecha) BETWEEN '2023-06-01' AND '2023-12-31'`);
        let rnp = await connection.executeQuery(`SELECT DISTINCT Area,Tipo_Control,Num_area FROM RNP WHERE Id_Cliente = ${client.Id_Cliente} and Id_Estatus = 3  AND CONVERT(DATE, Fecha) BETWEEN '2023-06-01' AND '2023-12-31'`);
        let lln = await connection.executeQuery(`SELECT DISTINCT Area,Tipo_Control,Num_trampa FROM LLN WHERE Id_Cliente = ${client.Id_Cliente} and Id_Estatus = 3  AND CONVERT(DATE, Fecha) BETWEEN '2023-06-01' AND '2023-12-31'`);

        console.log(edc)
        const clientData = {
            client: {
                planta: [client],
                sucursal: [clients.sucursal[clients.planta.indexOf(client)]]
            },
            servicios: {
                edc: edc.data[0]?edc.data[0]:[],
                edcm: edcm.data[0],
                rnp: rnp.data[0],
                lln: lln.data[0]
            }
        };
        services.push(clientData);
    }
    return services;
}

module.exports = SipocModel