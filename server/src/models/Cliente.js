'use strict';

// Módulos importados
const mongoose =  require('mongoose');

// Creamos el objeto del esquema y sus atributos
var ClienteSchema = mongoose.Schema({

  _id:            mongoose.Schema.Types.ObjectId,
  nombre:         String,
  apellidos:      String,
  tlf:            Number,
  email:          String,
  password:       String,
  numTarjeta:     String,
  entradasID:     {type: [mongoose.Schema.Types.ObjectId], ref: 'Entrada'},
  opiniones:      {type: [mongoose.Schema.Types.ObjectId], ref: 'Opinion'}
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;
