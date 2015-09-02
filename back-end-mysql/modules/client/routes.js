var express = require('express');
var router = express.Router();
var Client = require('./model');
var db = require('../../config/db');

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
	}).catch(function(){
		res.sendStatus(404);
	});
});

router.put('/:id', function(req, res) {

});

router.delete('/:id', function(req, res) {
	Client.destroy({
		where: {
			id: req.params.id
		}
	});
});

module.exports = router;