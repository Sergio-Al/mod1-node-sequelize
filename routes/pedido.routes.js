const express = require("express");
const router = express.Router();
const {
  obtenerPedidos,
  crearPedido,
  obtenerPedidoPorId,
  actualizarPedido,
  eliminarPedido,
} = require("../controllers/pedido.controller");

// Rutas para obtener y crear pedidos
router.get("/pedidos", obtenerPedidos);
router.post("/pedidos", crearPedido);
router.get("/pedidos/:id", obtenerPedidoPorId);
router.put("/pedidos/:id", actualizarPedido);
router.delete("/pedidos/:id", eliminarPedido);

// Exportar el router
module.exports = router;
