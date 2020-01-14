'use strict';

// Módulos importados
const mongoose =  require('mongoose');

// Creamos el objeto del esquema y sus atributos
var SalaSchema = mongoose.Schema({

  _id:        mongoose.Schema.Types.ObjectId,
  numSala:    Number,
  filas:      Number,
  columnas:   Number,
  pases:      {type: [mongoose.Schema.Types.ObjectId], ref: 'Pelicula'}
});

module.exports = mongoose.model('Sala', SalaSchema);
