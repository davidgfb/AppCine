'use strict';

// Módulos importados
const express = require('express');
const DBController = require('./DBController');

// Definición de constantes
const Router = express.Router();

// Ruta API para insertar una pelicula nueva
Router.post('/insertPelicula', async function(req, res){
  var status = DBController.insertPelicula(req);
  if(status === -1){
    res.status('201').send('err');
  }else{
    res.send('ok');
  }
});

// Ruta API para eliminar una pelicula
Router.post('/delPelicula', function(req, res){
  DBController.delPelicula(req);
});

Router.get('/allPeliculas', async function(req, res){
  DBController.getAllPeliculas(req, res);
});

// Ruta API para insertar una sala nueva
Router.post('/insertSala', async function(req, res){
  var status = await DBController.insertSala(req);
  if(status == -1){
    res.status("201").send("Numero de sala existente");
  }else{
    res.send('ok');
  }
});

// Ruta API para eliminar una sala
Router.post('/delSala', async function(req, res){
  var status = await DBController.delSala(req);
  if(status == -1){
    res.status("201").send("notOk");
  }else{
    res.send('ok');
  }
});

Router.get('/allSalas', async function(req, res){
    DBController.getAllSalas(req, res);
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
Router.post('/insertCliente', async function(req, res){
  var status = await DBController.insertCliente(req);
  if(status === -1){
    res.status('201').send('notOk');
  }else{
    res.send('ok');
  }
});

// Ruta API para eliminar un cliente
Router.post('/delCliente', async function(req, res){
  var status = DBController.delCliente(req);
  if(status == -1){
    res.status("201").send("notOk");
  }else{
    res.send('ok');
  }
});

Router.get('/allClientes', async function(req, res){
  DBController.getAllClientes(req, res);
});

module.exports = Router;
