const express = require('express');
const router = express.Router();
const {obtenerCliente,postCliente,deleteCliente,putCliente} = require('../controllers/clientes.controllers.js'); 

// Ruta para obtener d los MetododContinentes
router.get('/', obtenerCliente);

router.delete('/:id',deleteCliente)

router.post('/',postCliente)

router.put('/:id',putCliente)

module.exports = router