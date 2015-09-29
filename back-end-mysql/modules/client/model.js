var db = require('../../config/db');
var Sequelize = require('sequelize');

var Cliente = db.define('cliente', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CPF: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  dataNascimento: {
  	type: Sequelize.DATE
  },
  rua: {
    type: Sequelize.STRING
  },
  numero: {
    type: Sequelize.STRING
  },
  bairro: {
    type: Sequelize.DATE
  },
  CEP : {
    type: Sequelize.INTEGER
  },
  cidade: {
    type: Sequelize.STRING
  },
  estado: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});


module.exports = Cliente;