const Clientes = require('../Models/Clientes.js');

const postCliente = async (req, res) => {
  try {
    const { Descripcion } = req.body;
    const cliente = new Clientes({ Descripcion });

    // Guardar en MongoDB
    await cliente.save();
    res.json({
      message: 'Continente creado con éxito',
      cliente,
    });
  } catch (error) {
    console.error('Error al crear un cliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const putCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const cliente = await Clientes.findByIdAndUpdate(id, resto, { new: true });

    if (!cliente) {
      return res.status(404).json({ message: 'No se encontró el cliente' });
    }

    res.json({
      message: 'Continente actualizado con éxito',
      cliente,
    });
  } catch (error) {
    console.error('Error al actualizar un cliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Clientes.findByIdAndRemove(id);

    if (!cliente) {
      return res.status(404).json({ message: 'No se encontró el cliente' });
    }

    res.json({ message: 'Continente borrado correctamente' });
  } catch (error) {
    console.error('Error al borrar un cliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerCliente = async (req, res) => {
    try {
      const clientes = await Clientes.find().limit(100); // Limita a 100 resultados
      res.json(clientes);
    } catch (error) {
      console.error('Error al obtener las clientes:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  module.exports = {
    postCliente,
    putCliente,
    deleteCliente,
    obtenerCliente
  }