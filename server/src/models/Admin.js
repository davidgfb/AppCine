'use strict';

// Módulos importados
const mongoose =  require('mongoose');

// Esquema necesario para validar al administrador
var AdminSchema = mongoose.Schema({
  email:      String,
  password:   String
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
