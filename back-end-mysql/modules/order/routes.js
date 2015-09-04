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
	db.transaction(function (t) {
		return Order.create(req.body, {transaction: t}).then(function(order){
			for (var i = req.body.itemPedido.length - 1; i >= 0; i--) {
				item = req.body.itemPedido[i];
				order.addProduto(item.produto.id,{ quantidade : item.quantidade }, {transaction: t});
			};
			order.setCliente(req.body.cliente.id, {transaction: t});
		});
	}).then(function(result){
		res.json(result);
	}).catch(function(e){
		console.log(e);
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