'use strict';

// Módulos importados
const mongoose =  require('mongoose');

// Creamos el objeto del esquema y sus atributos
var PeliculaSchema = mongoose.Schema({

  _id:              mongoose.Schema.Types.ObjectId,
  titulo:           String,
  tituloOriginal:   String,
  sinopsis:         String,
  pagOficual:       String,
  genero:           String,
  duracion:         Number,
  nacionalidad:     String,
  annoEstreno:      Number,
  distribuidora:    String,
  director:         String,
  actores:          String,
  edadMin:          Number
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);
