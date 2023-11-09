const express = require('express');
const router = express.Router();
const {obtenerUsuario,postUsuario,deleteUsuario,putUsuario} = require('../controllers/usuarios.controllers.js'); 

// Ruta para obtener d los MetododContinentes
router.get('/', obtenerUsuario);

router.delete('/:id',deleteUsuario)

router.post('/',postUsuario)

router.put('/:id',putUsuario)

module.exports = router