// const sql = require('mssql')

const kepler = new (require('rest-mssql-nodejs'))({
    user: 'sa',
    password: '$3c0pl4@1963',
    server: '82.223.68.37',
    database: 'KEPLER_K95R',
    port: 1433,
    options: {
        trustServerCertificate: true
    }
})

module.exports = kepler