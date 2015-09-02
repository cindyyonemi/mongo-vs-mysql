var db = require('../../config/db');
var Sequelize = require('sequelize');

var Produto = db.define('produto', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  descricao: {
    type: Sequelize.STRING,
  },
  valorUnitario: {
    type: Sequelize.DOUBLE
  },
  qtdEstoque: {
  	type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Produto;