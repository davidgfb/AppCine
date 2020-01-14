'use strict';

// Módulos importados
const express = require('express');
const bodyParser = require('body-parser');
const DBController = require('./src/DBController');
const Router = require('./src/Router');

// Definición de constantes
const app = express();
const API_PORT = 3001;

if(process.argv[2] === "first"){
  // Se eliminan los datos de la base de datos, se crean
  // de nuevo las colecciones y se añaden los datos inciales
  DBController.firstInitDB();
}else{
  // Se inicia la conexión a la base de datos
  DBController.initDB();
}


// Indicamos que emplearemos el formato JSON
app.use(bodyParser.json());

// Añadimos el middleware que gestiona la API sobre la
// ruta: /api
app.use('/api', Router);

// La aplicación comienza a escuchar peticiones
app.listen(API_PORT, () => {
  console.log("Servidor API corriendo en el puerto " + API_PORT);
});
