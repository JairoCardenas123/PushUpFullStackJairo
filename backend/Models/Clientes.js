const { Schema, model } = require('mongoose');

const empleadosSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },number: {
      type: Number,
      required: true,
      trim: true,
    },Email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Clientes = model('Clientes', empleadosSchema, 'Clientes');

module.exports = Clientes;
