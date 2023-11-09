const express = require('express');
const router = express.Router();
const {obtenerProducto,postProducto,deleteProducto,putProducto} = require('../controllers/productos.controllers.js'); 

// Ruta para obtener d los MetododContinentes
router.get('/', obtenerProducto);

router.delete('/:id',deleteProducto)

router.post('/',postProducto)

router.put('/:id',putProducto)

module.exports = router