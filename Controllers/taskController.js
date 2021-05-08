const Task = require('../database/Models/Task'); //Importando el modelo



var controller = {
    
    create:function(req, res){
        Task.create({
            description: req.body.description
        }).then(task => {
            res.json(task);
        });
    },

    read:function(req, res){

        Task.findAll({
            attributes: ['id', 'description']
        }).then(task => {
            res.status(200).json(task);
          });
    },

    find: function(req, res){

        if (!req.params.id){
           return res.status(404).json({Error: 'Not found'});
        }
        Task.findByPk(req.params.id).then(task => {
            res.status(200).json(task);
          })
          .catch(err => {
            console.log(err);
          });
    },

    update:function(req, res){
        Task.update({ 
            description: req.body.description 
        },{
            where: {
              id: req.params.id
            }
          }).then(() => {
            res.status(200).json({task: 'Tarea actualizada'});
          })
          .catch(err => {
            console.log(err);
          });
    },
    delete:function(req, res){
        Task.destroy({
            where: {
                id: req.params.id
            }
        }).then(()=>{
            res.status(200).json({task: 'Tarea eliminada'});
        })
        .catch(err =>{
            console.log(err);
        });
    }

}


module.exports = controller;