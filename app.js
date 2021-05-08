'use strict'
//Cargando modulos
const express = require('express'); 
var cors = require('cors');
const bodyParser = require('body-parser');

//Usando app permite convertir cualquier peticion que llegue en un objeto json
var app = express();

//Permitiendo las peticiones cruzada
app.use(cors());

//Cargar archivos de Rutas
var project_routes = require('./Routes/taskRoute');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Especificando que cualquier peticion se convierta en un json

app.use('/api',project_routes);


//Exportando modulo
module.exports = app;