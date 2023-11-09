const { Schema, model } = require('mongoose');

const productosSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },quality: {
      type: String,
      required: true,
      trim: true,
    },size: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Productos = model('Productos', productosSchema, 'Productos');

module.exports = Productos;
