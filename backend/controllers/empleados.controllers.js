const Empleados = require('../Models/Empleados.js');

const postEmpleado = async (req, res) => {
  try {
    const { Descripcion } = req.body;
    const empleado = new Empleados({ Descripcion });

    // Guardar en MongoDB
    await empleado.save();
    res.json({
      message: 'Continente creado con éxito',
      empleado,
    });
  } catch (error) {
    console.error('Error al crear un empleado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const putEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const empleado = await Empleados.findByIdAndUpdate(id, resto, { new: true });

    if (!empleado) {
      return res.status(404).json({ message: 'No se encontró el empleado' });
    }

    res.json({
      message: 'Continente actualizado con éxito',
      empleado,
    });
  } catch (error) {
    console.error('Error al actualizar un empleado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleados.findByIdAndRemove(id);

    if (!empleado) {
      return res.status(404).json({ message: 'No se encontró el empleado' });
    }

    res.json({ message: 'Continente borrado correctamente' });
  } catch (error) {
    console.error('Error al borrar un empleado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerEmpleado = async (req, res) => {
    try {
      const empleados = await Empleados.find().limit(100); // Limita a 100 resultados
      res.json(empleados);
    } catch (error) {
      console.error('Error al obtener las empleados:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  module.exports = {
    postEmpleado,
    putEmpleado,
    deleteEmpleado,
    obtenerEmpleado
  }