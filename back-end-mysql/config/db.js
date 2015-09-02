var Sequelize = require('sequelize');
var sequelize = new Sequelize('mongo-vs-mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.sync({
    force: false
});

module.exports = sequelize;
