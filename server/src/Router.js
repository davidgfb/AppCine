'use strict';

// Módulos importados
const express = require('express');
const DBController = require('./DBController');

// Definición de constantes
const Router = express.Router();

// Ruta API para insertar una pelicula nueva
Router.post('/insertPelicula', function(req, res){
  console.log(req.body);
  DBController.insertPelicula(req);
  //res.redirect('/');
});

// Ruta API para eliminar una pelicula
Router.post('/delPelicula', function(req, res){
  DBController.delPelicula(req);
});

// Ruta API para insertar una sala nueva
Router.post('/insertSala', function(req, res){
  DBController.insertSala(req);
});

// Ruta API para eliminar una sala
Router.post('/delSala', function(req, res){
  DBController.delSala(req);
});

// Ruta API para insertar una entrada nueva
Router.post('/insertEntrada', function(req, res){
  DBController.insertEntrada(req);
});

// Ruta API para eliminar una entrada
Router.post('/delEntrada', function(req, res){
  DBController.delEntrada(req);
});

// Ruta API para insertar un cliente nuevo
Router.post('/insertCliente', function(req, res){
  DBController.insertCliente(req);
});

// Ruta API para eliminar un cliente
Router.post('/delCliente', function(req, res){
  DBController.delCliente(req);
});

module.exports = Router;
