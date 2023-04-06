const db = require('../database/models');
const Op = db.Sequelize.Op;
 
const controller = {
  index: (req, res) => {
     db.Product
        .findAll()
        .then(productos => {
           res.send(productos);
        })
        .catch(err => {
           res.send(err)
        })
  },
 
  porId: (req, res) => {
     db.Product
        .findByPk(req.params.id)
        .then(producto => {
           res.send(producto);
        })
        .catch(err => {
           res.send(err)
        })
  },

  //ME ENCANTO
  
  porPrecio: (req, res) => {
     db.Product
        .findAll({
           where: {
              precio: {
                 [Op.gte]: 50000
              }
           },
           order: [["nombre", "ASC"]],
           limit: 10
        })
        .then(producto => {
           res.send(producto);
        })
        .catch(err => {
           res.send(err)
        })
  },
}
 
module.exports = controller;