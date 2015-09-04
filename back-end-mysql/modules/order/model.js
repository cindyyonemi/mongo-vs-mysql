var db = require('../../config/db');
var Sequelize = require('sequelize');
var Client = require('../client/model');

var Order = db.define('order', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  dataHora: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  desconto: {
    type: Sequelize.DOUBLE
  },
  valorTotal: {
  	type: Sequelize.DOUBLE
  },
  formaPgto: {
    type: Sequelize.STRING
  }

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Order.belongsTo(Client, {as: 'cliente'});

module.exports = Order;