// const sql = require('mssql')

const kepler = new (require('rest-mssql-nodejs'))({
    user: 'tableau',
    password: 't4b13@u963',
    server: '70.35.199.43',
    database: 'KEPLER_K95R',
    port: 1433,
    options: {
        trustServerCertificate: true
    }
})

let user = 'gastos'
let password = '$3c0pl4'
let server = "187.188.159.26"
let database = 'KEPLER'
let port = 1435


// var config = {
//     user: user,
//     password: password,
//     server: server, 
//     port:port,
//     database: database,
//     options: {
//         trustServerCertificate: true 
//     }
// };

// sql.connect(config, function (err) {

//     if (err) console.log(err);
// })


module.exports = kepler