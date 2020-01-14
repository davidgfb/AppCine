'use strict';

// Módulos importados
const mongoose =  require('mongoose');

// Esquema necesario para almacenar las opiniones de los clientes
var OpinionSchema = mongoose.Schema({

  _id:          mongoose.Schema.Types.ObjectId,
  idPelicula:   {type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula'},
  opinion:      String,
  puntuacion:   Number
});

const Opinion = mongoose.model('Opinion', OpinionSchema);
module.exports = Opinion;
