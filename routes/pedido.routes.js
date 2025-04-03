const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido } = require('../controllers/pedido.controller');

// Rutas para obtener y crear pedidos
router.get('/pedidos', obtenerPedidos);
router.post('/pedidos', crearPedido);

// Exportar el router
module.exports = router;
