const Productos = require('../Models/Productos.js');

const postProducto = async (req, res) => {
  try {
    const { Descripcion } = req.body;
    const producto = new Productos({ Descripcion });

    // Guardar en MongoDB
    await producto.save();
    res.json({
      message: 'Continente creado con éxito',
      producto,
    });
  } catch (error) {
    console.error('Error al crear un producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const putProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const producto = await Productos.findByIdAndUpdate(id, resto, { new: true });

    if (!producto) {
      return res.status(404).json({ message: 'No se encontró el producto' });
    }

    res.json({
      message: 'Continente actualizado con éxito',
      producto,
    });
  } catch (error) {
    console.error('Error al actualizar un producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Productos.findByIdAndRemove(id);

    if (!producto) {
      return res.status(404).json({ message: 'No se encontró el producto' });
    }

    res.json({ message: 'Continente borrado correctamente' });
  } catch (error) {
    console.error('Error al borrar un producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerProducto = async (req, res) => {
    try {
      const producto = await Productos.find().limit(100); // Limita a 100 resultados
      res.json(producto);
    } catch (error) {
      console.error('Error al obtener las producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  module.exports = {
    postProducto,
    putProducto,
    deleteProducto,
    obtenerProducto
  }