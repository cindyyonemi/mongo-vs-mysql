var express = require('express');
var router = express.Router();
var Product = require('./model');
var db = require('../../config/db');

router.get('/', function(req, res) {
	Product.findAll().then(function(produtos){
		res.json(produtos);
	});
});

router.get('/:id', function(req, res) {
	var query = { id: req.params.id };

	Product.findOne({ where : query }).then(function(produto){
		res.json(produto);
	});
});

router.post('/', function(req, res) {
	db.transaction(function (t) {
		return Product.create(req.body, {transaction: t});
	}).then(function(result){
		res.json(result);
	}).catch(function(){
		res.sendStatus(404);
	});
});

router.put('/:id', function(req, res) {

});

router.delete('/:id', function(req, res) {
	Product.destroy({
		where: {
			id: req.params.id
		}
	});
});

module.exports = router;