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

/*************************************************************
 *                 FUNCIONES - PELICULAS                     *
 *************************************************************/

  // Inserta una nueva película en la base de datos
  insertPelicula: function(req){

    var newPelicula = new models.pelicula({

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

    models.pelicula.deleteOne(
      {"_id": req.body.id},
      function(err){
        if(err) return console.error(err);
      }
    );
  },

  // Modifica los campos de una película (determinada por su ID)
  // Solo sustituye los datos que no coincidan con los previos
  modPelicula: function(req){

    models.pelicula.findById(
      req.body.id,
      function(err, pelicula){
        if(err) return console.error(err);

        pelicula.titulo: (pelicula.titulo !== req.body.titulo) ? req.body.titulo : pelicula.titulo;
        pelicula.tituloOriginal: (pelicula.tituloOriginal !== req.body.tituloOriginal) ? req.body.tituloOriginal : pelicula.tituloOriginal;
        pelicula.sinopsis: (pelicula.sinopsis !== req.body.sinopsis) ? req.body.sinopsis : pelicula.sinopsis;
        pelicula.pagOficial: (pelicula.pagOficial !== req.body.pagOficial) ? req.body.pagOficial : pelicula.pagOficial;
        pelicula.genero: (pelicula.genero !== req.body.genero) ? req.body.genero : pelicula.genero;
        pelicula.duracion: (pelicula.duracion !== req.body.duracion) ? req.body.duracion : pelicula.duracion;
        pelicula.nacionalidad: (pelicula.nacionalidad !== req.body.nacionalidad) ? req.body.nacionalidad : pelicula.nacionalidad;
        pelicula.annoEstreno: (pelicula.annoEstreno !== req.body.annoEstreno) ? req.body.annoEstreno : pelicula.annoEstreno;
        pelicula.distribuidora: (pelicula.distribuidora !== req.body.distribuidora) ? req.body.distribuidora : pelicula.distribuidora;
        pelicula.director: (pelicula.director !== req.body.director) ? req.body.director : pelicula.director;
        pelicula.actores: (pelicula.actores !== req.body.actores) ? req.body.actores : pelicula.actores;
        pelicula.edadMin: (pelicula.edadMin !== req.body.edadMin) ? req.body.edadMin : pelicula.edadMin;

        pelicula.save()
                .then(doc => {
                  console.log(doc);
                })
                .catch(err => {
                  console.error(err);
                });
      }
    );
  },

  // Devuelve una pelicula siempre y cuando el id
  // indicado en la petición tenga una coincidencia
  queryPelicula: function(req){

    models.pelicula.findById(
      req.body.id,
      function(err, pelicula){
        if(err) return console.error(err);

        return pelicula;
      }
    );
  },


  queryPeliculas_sala: function(){},
  queryPeliculas_genero: function(){},
  queryPeliculas_anno: function(){},
  queryPeliculas_edadMin: function(){},

  // Devuelve todas las peliculas presentes en la
  // base de datos
  getAllPeliculas: function(){
    models.pelicula.find({},function(err, peliculas){
      if(err) return console.error(err);
      return peliculas;
    });
  },
/***************** FIN FUNCIONES PELICULAS *******************/


/*************************************************************
 *                      FUNCIONES SALAS                      *
 *************************************************************/


  // Inserta una nueva sala en la base de datos
  insertSala: function(req){

    var newSala = new models.sala({
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

    models.sala.deleteOne(
      {numSala: req.body.numSala},
      function(err){
        if(err) return console.error(err);
      }
    );
  },

  // Modifica los campos de una sala (determinada por su ID)
  // Solo sustituye los datos que no coincidan con los previos
  modSala: function(req){

    models.sala.findById(
      req.body.id,
      function(err, sala){
        if(err) return console.error(err);

        if(req.body.numSala != sala.numSala){
          if(models.sala.exists({numSala: req.body.numSala})){
            return console.error("El número de sala ya está en uso");
          }
        }else{
          sala.numSala: req.body.numSala;
        }

        sala.filas: (sala.filas == req.body.filas) ? sala.filas : req.body.filas;
        sala.columnas: (sala.columnas == req.body.columnas) ? sala.columnas : req.body.columnas;

        sala.save()
            .then(doc => {
              console.log(doc);
            })
            .catch(err => {
              console.error(err);
            });
      }
    );
  },

  // Devuelve la sala cuyo "numero de sala" coincida
  // con el indicado en la petición
  querySala: function(req){

    models.sala.findOne(
      { numSala: req.body.numSala},
      function(err, sala){
        if(err) return console.error(err);

        // Puede que devuelva un valor nulo (?)
        return sala;
    })
  },

  // Devuelve todas las salas presentes en la
  // base de datos
  getAllSalas: function(){
    models.sala.find({},function(err, salas){
      if(err) return console.error(err);
      return salas;
    });
  },
/******************* FIN FUNCIONES SALAS *********************/



/*************************************************************
 *                    FUNCIONES ENTRADAS                     *
 *************************************************************/

  // ===================================================
  // = IMPORTANTE: Las entradas no se pueden modificar =
  // ===================================================

  // Inserta una nueva entrada en la base de datos
  insertEntrada: function(req){

    var newEntrada = new models.entrada({

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

    models.entrada.deleteOne(
      {"_id": req.body.id},
      function(err){
        if(err) return console.error(err);
      }
    )
  },

  queryEntrada: function(){},


  // Devuelve todas las entradas presentes en la
  // base de datos
  getAllEntradas: function(){
    models.entrada.find({},function(err, entradas){
      if(err) return console.error.(err);
      return entradas;
    });
  }
/***************** FIN FUNCIONES ENTRADAS *******************/


/*************************************************************
 *                    FUNCIONES CLIENTES                     *
 *************************************************************/

  // Inserta un nuevo cliente en la base de datos
  insertCliente: function(req){

    var newCliente = new models.cliente({

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

    models.cliente.deleteOne(
      {"_id": req.body.id},
      function(err){
        if(err) return console.error(err);
      }
    );
  },

  // Modifica los campos de un cliente (determinado por su ID)
  // Solo sustituye los datos que no coincidan con los previos
  modCliente: function(req){

    models.cliente.findById(
      req.body.id,
      function(err, cliente){
        if(err) return console.error(err);

        cliente.nombre: (cliente.nombre !== req.body.nombre) ? req.body.nombre : cliente.nombre;
        cliente.apellidos: (cliente.apellidos !== req.body.apellidos) ? req.body.apellidos : cliente.apellidos;
        cliente.tlf: (cliente.tlf !== req.body.tlf) ? req.body.tlf : cliente.tlf;
        cliente.email: (cliente.email !== req.body.email) ? req.body.email : cliente.email;
        cliente.numTarjeta: (cliente.numTarjeta !== req.body.numTarjeta) ? req.body.numTarjeta : cliente.numTarjeta;

        cliente.save()
               .then(doc => {
                 console.log(doc);
               })
               .catch(err => {
                 console.error(err);
               });
      }
    );
  },

  queryCliente: function(){},
  addEntradaToCliente: function(){},
  removeEntradaFromCliente: function(){},
  addOpinionToCliente: function(){},
  removeOpinionFromCliente: function(){},
  getEntradasByCliente: function(){},
  getOpinionesByCliente: function(){},

  // Devuelve todos los clientes presentes en la
  // base de datos
  getAllClientes: function(){
    models.cliente.find({},function(err, clientes){
      if(err) return console.error.(err);
      return clientes;
    });
  }
/*************** FIN FUNCIONES CLIENTES *****************/

}


module.exports = DBController;
