var express = require('express');
var router = express.Router();
var Client = require('./model');
var db = require('../../config/db');
var Order = require('../order/model');

router.get('/', function(req, res) {
	Client.findAll().then(function(clients){
		res.json(clients);
	});
});

router.get('/:id', function(req, res) {
	var query = { id: req.params.id };

	Client.findOne({ where : query }).then(function(client){
		res.json(client);
	});
});

router.post('/', function(req, res) {
	db.transaction(function (t) {
		return Client.create(req.body, {transaction: t});
	}).then(function(result){
		res.json(result);
	}).catch(function(e){
		res.sendStatus(e);
	});
});

router.put('/:id', function(req, res) {
	var query = { id: req.params.id };
	db.transaction(function (t) {
		return Client.findOne(query).then(function(client){
			console.log(req.body);
			client.updateAttributes(req.body, {transaction: t});
		});
	}).then(function(result){
		res.json(result);
	}).catch(function(e){
		res.sendStatus(e);
	});
});

router.delete('/:id', function(req, res) {
	Client.destroy({
		where: {
			id: req.params.id
		}
	});
	res.json({"ok" : 1});
});

router.get('/byCidade/:cidade', function(req, res) {
	var query = { cidade: req.params.cidade };

	Client.findAll({ where : query }).then(function(client){
		res.json(client);
	});
});


router.get('/juncao/:id', function(req, res) {
	Client.findAll({include: [Order]}).then(function(client){
		res.json(client);
	});
});

router.get('/juncao/byCidade/:cidade', function(req, res) {
	var query = { cidade: req.params.cidade };
	Client.findAll({include: [Order], where : query}).then(function(client){
		res.json(client);
	});
});

module.exports = router;