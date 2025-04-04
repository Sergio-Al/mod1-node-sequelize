const { Pedido } = require("../models");

// Controlador para obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};

// Controlador para obtener un pedido por ID
exports.crearPedido = async (req, res) => {
  const pedido = await Pedido.create(req.body);
  res.status(201).json(pedido);
};

// Controlador para obtener un pedido por ID
exports.obtenerPedidoPorId = async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }

  res.json(pedido);
};

// Controlador para actualizar un pedido por ID
exports.actualizarPedido = async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }

  await pedido.update(req.body);
  res.json(pedido);
};

// Controlador para eliminar un pedido por ID
exports.eliminarPedido = async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  await pedido.destroy();
  res.status(204).send();
};
