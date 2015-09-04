var db = require('../../config/db');
var Sequelize = require('sequelize');
var Product = require('../product/model');
var Order = require('../order/model');

var ItemProduto = db.define('item_produto', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  quantidade: Sequelize.INTEGER
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

ItemProduto.belongsTo(Product, {as: 'produto'});

Order.belongsToMany(Product, { through: ItemProduto })
Product.belongsToMany(Order, { through: ItemProduto })

module.exports = ItemProduto;