const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

//Creando esquema del Modelo
class Task extends Model {}
Task.init({
    description: DataTypes.STRING
},{ 
    sequelize,
    modelName: 'task'
});

module.exports = Task;