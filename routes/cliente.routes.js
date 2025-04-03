const express = require('express');
const router = express.Router();
const { obtenerClientes, crearCliente } = require('../controllers/cliente.controller');

// Rutas para obtener y crear clientes
router.get('/clientes', obtenerClientes);
router.post('/clientes', crearCliente);

// Exportar el router
module.exports = router;
