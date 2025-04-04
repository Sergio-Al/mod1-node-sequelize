const { Cliente } = require("../models");

// Controlador para obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

// Controlador para crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json(cliente);
};

// Controlador para obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) {
    return res.status(404).json({ error: "Cliente no encontrado" });
  }
  res.json(cliente);
};

// Controlador para actualizar un cliente por ID
exports.actualizarCliente = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) {
    return res.status(404).json({ error: "Cliente no encontrado" });
  }

  await cliente.update(req.body);
  res.json(cliente);
};

// Controlador para eliminar un cliente por ID
exports.eliminarCliente = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) {
    return res.status(404).json({ error: "Cliente no encontrado" });
  }
  await cliente.destroy();
  res.status(204).send();
};
