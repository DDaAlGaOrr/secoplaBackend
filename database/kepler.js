// const sql = require('mssql')

const kepler = new(require('rest-mssql-nodejs'))({
    user:'gastos',
    password:'$3c0pl4',
    server:'187.188.159.26',
    database:'KEPLER',
    port:1435,
    options:{
        trustServerCertificate: true 
    }
})

let user='gastos'
let password='$3c0pl4'
let server="187.188.159.26"
let database='KEPLER'
let port=1435


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