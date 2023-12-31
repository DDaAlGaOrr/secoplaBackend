const express = require('express')
const router = express.Router()
const Clientes = require('./../controllers/ClientesController')

router.get('/clientes',Clientes.getClientes)
router.get('/clientesbyarea/:area',Clientes.getClientesByArea)
module.exports = router