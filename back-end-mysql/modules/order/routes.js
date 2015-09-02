var express = require('express');
var router = express.Router();
var Order = require('./model');
var db = require('../../config/db');

router.get('/', function(req, res) {
	Order.findAll().then(function(orders){
		res.json(orders);
	});
});

router.get('/:id', function(req, res) {
	var query = { id: req.params.id };

	Order.findOne({ where : query }).then(function(order){
		res.json(order);
	});
});

router.post('/', function(req, res) {
	var order = Order.create(req.body);
	console.log(order);
	order.addCliente(req.body.cliente);
	console.log(order);
	db.transaction(function (t) {
		return order.save({transaction: t});
	}).then(function(result){
		res.json(result);
	}).catch(function(){
		res.sendStatus(404);
	});
});

router.put('/:id', function(req, res) {

});

router.delete('/:id', function(req, res) {
	Order.destroy({
		where: {
			id: req.params.id
		}
	});
});

module.exports = router;