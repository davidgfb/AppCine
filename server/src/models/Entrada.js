'use strict';

// Módulos importados
const mongoose =  require('mongoose');

// Creamos el objeto del esquema y sus atributos
var EntradaSchema = mongoose.Schema({

  _id:            mongoose.Schema.Types.ObjectId,
  fecha: {
    dia:          Number,
    mes:          Number,
    anno:         Number
  },
  hora: {
    h:            Number,
    m:            Number
  },
  numSala:        Number,
  fila:           Number,
  columna:        Number,
  nombrePelicula: String
});

module.exports = mongoose.model('Entrada', EntradaSchema);
