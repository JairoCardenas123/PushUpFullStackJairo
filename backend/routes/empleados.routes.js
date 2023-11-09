const express = require('express');
const router = express.Router();
const {obtenerEmpleado,postEmpleado,deleteEmpleado,putEmpleado} = require('../controllers/empleados.controllers.js'); 

// Ruta para obtener d los MetododContinentes
router.get('/', obtenerEmpleado);

router.delete('/:id',deleteEmpleado)

router.post('/',postEmpleado)

router.put('/:id',putEmpleado)

module.exports = router