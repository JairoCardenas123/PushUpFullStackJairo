const { Schema, model } = require('mongoose');

const empleadosSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    years: {
      type: Number,
      required: true,
      trim: true,
    },job: {
      type: String,
      required: true,
      trim: true,
    },salary: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Empleados = model('Empleados', empleadosSchema, 'Empleados');

module.exports = Empleados;
