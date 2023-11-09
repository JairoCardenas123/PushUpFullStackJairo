const { Schema, model } = require('mongoose');

const usuariosSchema = Schema(
  {
    user: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: Number,
      required: true,
      trim: true,
    },Email: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Usuarios = model('Usuarios', usuariosSchema, 'Usuarios');

module.exports = Usuarios;
