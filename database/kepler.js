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

module.exports = kepler