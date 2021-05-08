'use strict'
var express = require('express');
var TaskController = require('../Controllers/taskController');


var router = express.Router();

//Rutas del controlador
router.post('/create', TaskController.create);
router.get('/read', TaskController.read);
router.get('/find/:id?', TaskController.find);
router.put('/update/:id?', TaskController.update);
router.delete('/delete/:id?', TaskController.delete);

module.exports = router;