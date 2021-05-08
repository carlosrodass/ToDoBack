const app = require('./app');
const port = 3000;
const sequelize = require('./database/db');

//Conexion del servidor

    app.listen(port, ()=>{
        console.log('Servidor funcionando en http://localhost:3000');

        //Conectando a la base de datos
        //Force true: DROP TABLES
        sequelize.sync({force: false}).then(()=>{
            console.log('Conectado a la base de datos: task');
        }).catch(err =>{
            console.log('Se ha producido un error', err);
        })
    });


