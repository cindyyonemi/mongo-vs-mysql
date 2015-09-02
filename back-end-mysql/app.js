var express = require('express');
var app = express();
var db = require('./config/db');
var cors = require('cors');

app.disable('x-powered-by');

app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Config API */
app.use('/api/v1/products', require('./modules/product/routes'));
app.use('/api/v1/clients', require('./modules/client/routes'));
app.use('/api/v1/orders', require('./modules/order/routes'));

module.exports = app;