'use strict';

// Módulos importados
const mongoose =  require('mongoose');

// Esquema necesario para almacenar las opiniones de los clientes
var OpinionSchema = mongoose.Schema({

  idPelicula:   mongoose.Schema.Types.ObjectId,
  opinion:      String,
  puntuacion:   Number
});

// Creamos el objeto del esquema y sus atributos
var ClienteSchema = mongoose.Schema({

  _id:            mongoose.Schema.Types.ObjectId,
  nombre:         String,
  apellidos:      String,
  tlf:            Number,
  email:          String,
  numTarjeta:     String,
  entradasID:     [mongoose.Schema.Types.ObjectId],
  opiniones:      [OpinionSchema]
});

var modelCliente = mongoose.model('Cliente', ClienteSchema);
var modelOpinion = mongoose.model('Opinion', OpinionSchema);
module.exports = {
  modelCliente,
  modelOpinion
};
