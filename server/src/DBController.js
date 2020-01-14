'use strict';
// TODO: Hacer una función para autenticar al usuario y que diferencie:
// Usuario, admin y err en caso de no conseguir autenticarse
// Módulos importados
const mongoose = require('mongoose');
const Pelicula = require('./models/Pelicula');
const Entrada = require('./models/Entrada');
const Sala = require('./models/Sala');
const Opinion = require('./models/Opinion');
const Cliente = require('./models/Cliente');
const Admin = require('./models/Admin');

const DBController = {

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

  firstInitDB: function(){

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

    console.log("Eliminando base de datos...");
    mongoose.connection.dropDatabase();

    console.log("[OK] - Base de datos eliminada.");
    console.log("Creando colecciones...");
    mongoose.connection.createCollection("clientes").catch((err) => {console.error(err)});
    mongoose.connection.createCollection("entradas").catch((err) => {console.error(err)});
    mongoose.connection.createCollection("peliculas").catch((err) => {console.error(err)});
    mongoose.connection.createCollection("salas").catch((err) => {console.error(err)});
    mongoose.connection.createCollection("admins").catch((err) => {console.error(err)});
    console.log("[OK] - Colecciones creada.");
    console.log("Carga inicial de datos...");

    // Creación del administrador
    var admin = new Admin({
      email: "admin@cinemanager.com",
      password: "admin"
    })
    mongoose.connection.collection("admins").insertOne(admin);

    var client = new Cliente({
      _id:            new mongoose.Types.ObjectId(),
      nombre:         "Alvaro",
      apellidos:      "García Merino",
      tlf:            636146931,
      email:          "Alvaro97gm@gmail.com",
      password:       "12345",
      numTarjeta:     '1234 1234 1234 1234',
      entradasID:     [],
      opiniones:      []
    })
    mongoose.connection.collection("clientes").insertOne(client);

    var pelicula = new Pelicula({
      _id:              new mongoose.Types.ObjectId(),
      titulo:           "El oficial y el espía",
      tituloOriginal:   "J'Accuse",
      sinopsis:         "El capitán Alfred Dreyfus, un joven oficial judío, es degradado por espiar para Alemania
                        y condenado a cadena perpetua en la isla del Diablo, en la Guayana Francesa. Entre los testigos
                        que hacen posible esta humillación se encuentra el coronel Georges Picquart, encargado de
                        liderar la unidad de contrainteligencia que descubrió al espía. Pero cuando Picquart se entera
                        de que se siguen pasando secretos militares a los alemanes, se adentrará en un peligroso
                        laberinto de mentiras y corrupción, poniendo en peligro su honor y su vida.",

      pagOficual:       "https://www.filmaffinity.com/es/film269157.html",
      genero:           "Drama | Histórico. Siglo XIX. Años 1900 (circa)",
      duracion:         "126",
      nacionalidad:     "Francia",
      annoEstreno:      "2019",
      distribuidora:    "Coproducción Francia-Italia; Gaumont / Légende Films / Canal+ / Eliseo Cinema / France 2 (FR 2) / France 3 (FR 3) / RAI Cinema",
      director:         "ROMAN POLANSKI",
      actores:          "Jean Dujardin, Louis Garrel, Emmanuelle Seigner, Grégory Gadebois, Hervé Pierre, Wladimir Yordanoff",
      edadMin:          "12"
      })
      mongoose.connection.collection("pelicula").insertOne(pelicula);

      var pelicula = new Pelicula({

      _id:              new mongoose.Types.ObjectId(),
      titulo:           "Pavaroti",
      tituloOriginal:   "Pavarotti",
      sinopsis:         "El director ganador del Oscar Ron Howard presenta a la audiencia la voz, el hombre, la leyenda:
                        Luciano Pavarotti. Creada a partir de una combinación de personalísimas actuaciones de Pavarotti
                        y el acceso a imágenes inéditas, la película proporciona al público un íntimo retrato del más querido
                        cantante de ópera de todos los tiempos.",
      pagOficual:       "https://www.filmaffinity.com/es/film519073.html",
      genero:           "Documental | Biográfico. Documental sobre música",
      duracion:         "114",
      nacionalidad:     "Reino Unido",
      annoEstreno:      "2020",
      distribuidora:    "Coproducción Reino Unido-Estados Unidos; Imagine Entertainment / Polygram Filmed Entertainment / StudioCanal / White Horse Pictures",
      director:         "RON HOWARD",
      actores:          "Documentary, Luciano Pavarotti, Andrea Griminelli, Nicoletta Mantovani, Bono, Angela Gheorghiu, Carol Vaness, Lorenza Pavarotti, Giuliana Pavarotti",
      edadMin:          "7"

      })
      mongoose.connection.collection("pelicula").insertOne(pelicula);

      var pelicula = new Pelicula({

      _id:              new mongoose.Types.ObjectId(),
      titulo:           "El misterio del dragon",
      tituloOriginal:   "The Mystery of the Dragon Seal",
      sinopsis:         "El cartógrafo inglés Jonathan Green recibe la orden de crear un mapa de la lejana Rusia. En su largo viaje,
                        Jonathan vivirá todo tipo de aventuras, desde enfrentamientos con extrañas criaturas y batallas con maestros
                        en artes marciales hasta brujas milenarias ocultas en los rincones más recónditos de la legendaria China. Pero
                        todas las pruebas parecerán un juego de niños cuando tenga que enfrentarse al mayor de los enemigos jamás creado
                        por la magia negra: el gran Rey   de los Dragones.",
      pagOficual:       "https://www.filmaffinity.com/es/film215051.html",
      genero:           "Fantástico. Aventuras. Acción | Siglo XVIII. Secuela. 3-D",
      duracion:         "120",
      nacionalidad:     "China",
      annoEstreno:      "2020",
      distribuidora:    "Coproducción China-Rusia-Estados Unidos; Buffalo 8 Productions / Kinokompaniya CTB / China Film Group / China International Picture / Fetisoff Illusion",
      director:         "OLEG STEPCHENKO",
      actores:          "Jason Flemyng, Anna Yao, Anna Churina, Jackie Chan, Arnold Schwarzenegger, Rutger Hauer, Charles Dance, Paul Allica",
      edadMin:          "12"

      })
      mongoose.connection.collection("pelicula").insertOne(pelicula);

      var pelicula = new Pelicula({

      _id:              new mongoose.Types.ObjectId(),
      titulo:           "El faro",
      tituloOriginal:   "The Lighthouse",
      sinopsis:         "Robert Eggers nos trae la hipnótica y espectral historia de dos fareros (Willem Dafoe y Robert Pattinson)
                        en una remota y misteriosa isla de la costa de Nueva Inglaterra a finales del siglo XIX. La película muestra
                        la historia de dos fareros que, atrapados y aislados debido a una tormenta aparentemente sin fin, se enzarzan
                        en una creciente escalada de enfrentamientos a medida que se fraguan tensiones entre ambos y unas misteriosas fuerzas, reales o imaginarias, parecen apoderarse de ellos.",

      pagOficual:       "https://www.filmaffinity.com/es/film824461.html",
      genero:           "Terror. Fantástico. Drama | Siglo XIX",
      duracion:         "110",
      nacionalidad:     "Estados Unidos",
      annoEstreno:      "2019",
      distribuidora:    "Coproducción Estados Unidos-Canadá; New Regency Pictures / RT Features. Distribuida por A24",
      director:         "ROBERT EGGERS",
      actores:          "Willem Dafoe, Robert Pattinson",
      edadMin:          "16"

      })
      mongoose.connection.collection("pelicula").insertOne(pelicula);

      var pelicula = new Pelicula({

      _id:              new mongoose.Types.ObjectId(),
      titulo:           "Joker",
      tituloOriginal:   "Joker",
      sinopsis:         "Protagonizada por Joaquin Phoenix como Arthur Fleck, la película explorará los orígenes del personaje, mostrando la historia de un hombre derribado por la sociedad que se convierte en el hombre que conocemos como el Joker.",
      pagOficual:       "https://www.filmaffinity.com/es/film520214.html",
      genero:           "Thriller. Drama | Crimen. DC Comics. Cómic. Payasos. Drama psicológico. Años 80",
      duracion:         "121",
      nacionalidad:     "Estados Unidos",
      annoEstreno:      "2019"
      distribuidora:    "DC Comics / DC Entertainment / Warner Bros. / Village Roadshow / Bron Studios / Creative Wealth Media Finance / 22 & Indiana Pictures. Distribuida por Warner Bros.",
      director:         "TODD PHILLIPS",
      actores:          "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Bill Camp, Shea Whigham, Dante Pereira-Olson, Douglas Hodge, Jolie Chan",
      edadMin:          "18"

      })
      mongoose.connection.collection("pelicula").insertOne(pelicula);




}
/*************************************************************
 *                 FUNCIONES - PELICULAS                     *
 *************************************************************/

  // Inserta una nueva película en la base de datos
  insertPelicula: function(req){

    var newPelicula = new Pelicula({

      _id:              new mongoose.Types.ObjectId(),
      titulo:           req.body.titulo,
      tituloOriginal:   req.body.tituloOriginal,
      sinopsis:         req.body.sinopsis,
      pagOficual:       req.body.pagOficial,
      genero:           req.body.genero,
      duracion:         req.body.duracion,
      nacionalidad:     req.body.nacionalidad,
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

        pelicula.titulo = (pelicula.titulo !== req.body.titulo) ? req.body.titulo : pelicula.titulo;
        pelicula.tituloOriginal = (pelicula.tituloOriginal !== req.body.tituloOriginal) ? req.body.tituloOriginal : pelicula.tituloOriginal;
        pelicula.sinopsis = (pelicula.sinopsis !== req.body.sinopsis) ? req.body.sinopsis : pelicula.sinopsis;
        pelicula.pagOficial = (pelicula.pagOficial !== req.body.pagOficial) ? req.body.pagOficial : pelicula.pagOficial;
        pelicula.genero = (pelicula.genero !== req.body.genero) ? req.body.genero : pelicula.genero;
        pelicula.duracion = (pelicula.duracion !== req.body.duracion) ? req.body.duracion : pelicula.duracion;
        pelicula.nacionalidad = (pelicula.nacionalidad !== req.body.nacionalidad) ? req.body.nacionalidad : pelicula.nacionalidad;
        pelicula.annoEstreno = (pelicula.annoEstreno !== req.body.annoEstreno) ? req.body.annoEstreno : pelicula.annoEstreno;
        pelicula.distribuidora = (pelicula.distribuidora !== req.body.distribuidora) ? req.body.distribuidora : pelicula.distribuidora;
        pelicula.director = (pelicula.director !== req.body.director) ? req.body.director : pelicula.director;
        pelicula.actores = (pelicula.actores !== req.body.actores) ? req.body.actores : pelicula.actores;
        pelicula.edadMin = (pelicula.edadMin !== req.body.edadMin) ? req.body.edadMin : pelicula.edadMin;

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
          sala.numSala = req.body.numSala;
        }

        sala.filas = (sala.filas == req.body.filas) ? sala.filas : req.body.filas;
        sala.columnas = (sala.columnas == req.body.columnas) ? sala.columnas : req.body.columnas;

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
      if(err) return console.error(err);
      return entradas;
    });
  },
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
      password:       req.body.password,
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

        cliente.nombre = (cliente.nombre !== req.body.nombre) ? req.body.nombre : cliente.nombre;
        cliente.apellidos = (cliente.apellidos !== req.body.apellidos) ? req.body.apellidos : cliente.apellidos;
        cliente.tlf = (cliente.tlf !== req.body.tlf) ? req.body.tlf : cliente.tlf;
        cliente.email = (cliente.email !== req.body.email) ? req.body.email : cliente.email;
        cliente.numTarjeta = (cliente.numTarjeta !== req.body.numTarjeta) ? req.body.numTarjeta : cliente.numTarjeta;

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
      if(err) return console.error(err);
      return clientes;
    });
  }
/*************** FIN FUNCIONES CLIENTES *****************/

}

module.exports = DBController;
