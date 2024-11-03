const kepler = new (require('rest-mssql-nodejs'))({
    user: 'sa',
    password: '$3c0pl4@1963',
    server: '216.250.114.132',
    database: 'SECOPLA',
    port: 1433,
    options: {
        trustServerCertificate: true
    }
})

module.exports = kepler