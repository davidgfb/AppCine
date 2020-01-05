'use strict';

// Módulos importados
const mongoose = require('mongoose');
const Pelicula = require('./models/Pelicula');
const Entrada = require('./models/Entrada');
const Sala = require('./models/Sala');
const { Cliente, Opinion } = require('./models/Cliente');

const DBController = {

  // Modelos empleados por la base de datos
  models: {
    pelicula: Pelicula,
    entrada: Entrada,
    sala: Sala,
    cliente: Cliente,
    opinion: Opinion
  },


  // Gestiona la conexión inicial del controlador con la
  // base de datos.
  initDB: function(){

    let dbRoute = "mongodb://localhost:27017/dbCine";
    let db = mongoose.connect(
      dbRoute,
      {useNewUrlParser: true, useUnifiedTopology: true},
      function(err){
        if(err){
          throw err;
        }else{
          console.log("[OK] - Conexión correcta a la base de datos.");
        }
      }
    );
  },


  // Inserta una nueva película en la base de datos
  insertPelicula: function(req){

    var newPelicula = new DBController.pelicula({

      _id:              new mongoose.Types.ObjectId(),
      titulo:           req.body.titulo,
      tituloOriginal:   req.body.tituloOriginal,
      sinopsis:         req.body.sinopsis,
      pagOficual:       req.body.pagOficial,
      genero:           req.body.genero,
      duracion:         req.body.duracion,
      nacionalidad:     req.body.sinopsis,
      annoEstreno:      req.body.annoEstreno,
      distribuidora:    req.body.distribuidora,
      director:         req.body.director,
      actores:          req.body.actores,
      edadMin:          req.body.edadMin
    });

    newPelicula.save()
               .then(doc => {
                 console.log(doc);
               })
               .catch(err => {
                 console.error(err);
               })
  },


  // Elimina una pelicula (en base a su ID) de la
  // base de datos
  delPelicula: function(req){

    DBController.pelicula.deleteOne(
      {"_id": req.body.id},
      function(err){
        if(err) return console.error(err);
      }
    );
  },

  modPelicula: function(){},
  queryPelicula: function(){},


  // Inserta una nueva sala en la base de datos
  insertSala: function(req){

    var newSala = new DBController.sala({
      _id:           new mongoose.Types.ObjectId(),
      numSala:       req.body.numSala,
      filas:         req.body.filas,
      columnas:      req.body.columnas,
    });

    newSala.save()
           .then(doc => {
             console.log(doc);
           })
           .catch(err => {
             console.error(err);
           })
  },


  // Elimina la sala indicada (en base al número de sala)
  // de la base de datos
  delSala: function(req){

    DBController.sala.deleteOne(
      {numSala: req.body.numSala},
      function(err){
        if(err) return console.error(err);
      }
    );
  },

  modSala: function(){},
  querySala: function(){},


  // Inserta una nueva entrada en la base de datos
  insertEntrada: function(req){

    var newEntrada = new DBController.entrada({

      _id:            new mongoose.Types.ObjectId(),
      fecha: {
        dia:          req.body.dia,
        mes:          req.body.mes,
        anno:         req.body.anno
      },
      hora: {
        h:            req.body.hour,
        m:            req.body.min
      },
      numSala:        req.body.numSala,
      fila:           req.body.fila,
      columna:        req.body.columna,
      nombrePelicula: req.body.nombrePelicula
    });

    newEntrada.save()
           .then(doc => {
             console.log(doc);
           })
           .catch(err => {
             console.error(err);
           })
  },


  // Elimina la entrada (en base a su ID) de
  // la base de datos
  delEntrada: function(req){

    DBController.entrada.deleteOne(
      {"_id": req.body.id},
      function(err){
        if(err) return console.error(err);
      }
    )
  },

  modEntrada: function(){},
  queryEntrada: function(){},

  queryReserva: function(){},

  peliculas_sala: function(){},
  peliculas_genero: function(){},
  peliculas_anno: function(){},
  peliculas_duracion: function(){},


  // Inserta un nuevo cliente en la base de datos
  insertCliente: function(req){

    var newCliente = new DBController.cliente({

      _id:            new mongoose.Types.ObjectId(),
      nombre:         req.body.nombre,
      apellidos:      req.body.apellidos,
      tlf:            req.body.tlf,
      email:          req.body.email,
      numTarjeta:     '',
      entradasID:     [],
      opiniones:      []
    });

    newCliente.save()
              .then(doc => {
                console.log(doc);
              })
              .catch(err => {
                console.error(err);
              })
  },

  // Elimina al cliente (en base a su ID) de
  // la base de datos
  delCliente: function(req){

    DBController.cliente.deleteOne(
      {"_id": req.body.id},
      function(err){
        if(err) return console.error(err);
      }
    )
  },

  queryCliente: function(){},
  queryClientes: function(){}
}

module.exports = DBController;
