const Usuarios = require('../Models/Usuarios.js');

const postUsuario = async (req, res) => {
  try {
    const { Descripcion } = req.body;
    const usuario = new Usuarios({ Descripcion });

    // Guardar en MongoDB
    await usuario.save();
    res.json({
      message: 'Continente creado con éxito',
      usuario,
    });
  } catch (error) {
    console.error('Error al crear un usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const putUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const usuario = await Usuarios.findByIdAndUpdate(id, resto, { new: true });

    if (!usuario) {
      return res.status(404).json({ message: 'No se encontró el usuario' });
    }

    res.json({
      message: 'Continente actualizado con éxito',
      usuario,
    });
  } catch (error) {
    console.error('Error al actualizar un usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuarios.findByIdAndRemove(id);

    if (!usuario) {
      return res.status(404).json({ message: 'No se encontró el usuario' });
    }

    res.json({ message: 'Continente borrado correctamente' });
  } catch (error) {
    console.error('Error al borrar un usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerUsuario = async (req, res) => {
    try {
      const usuario = await Usuarios.find().limit(100); // Limita a 100 resultados
      res.json(usuario);
    } catch (error) {
      console.error('Error al obtener las usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  module.exports = {
    postUsuario,
    putUsuario,
    deleteUsuario,
    obtenerUsuario
  }