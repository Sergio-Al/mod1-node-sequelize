const express = require("express");
const router = express.Router();
const {
  obtenerClientes,
  crearCliente,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
} = require("../controllers/cliente.controller");

// Rutas para obtener, actualizar y eliminar clientes por ID
router.get("/clientes", obtenerClientes);
router.post("/clientes", crearCliente);
router.get("/clientes/:id", obtenerClientePorId);
router.put("/clientes/:id", actualizarCliente);
router.delete("/clientes/:id", eliminarCliente);

// Exportar el router
module.exports = router;
