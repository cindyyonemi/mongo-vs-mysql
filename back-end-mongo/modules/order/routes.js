var express = require('express');
var router = express.Router();
var Order = require('./model');

router.get('/', function(req, res) {
	Order.find({})
		.populate('cliente')
		.populate('itemPedido')
		.populate('itemPedido.produto')
		.exec(function (err, data) {
		if (err) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

router.get('/:id', function(req, res) {
	var query = { _id: req.params.id };

	Order.findOne(query)
		.populate('cliente')
		.populate('itemPedido')
		.populate('itemPedido.produto')
		.exec(function (err, data) {
		if (err) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

router.post('/', function(req, res) {
	var order = new Order(req.body);

	order.save(function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

router.put('/:id', function(req, res) {var query = { _id: req.params.id };
	var mod = req.body;
	delete mod._id;

	Order.update(query, mod, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

router.delete('/:id', function(req, res) {
	var query = { _id: req.params.id };

	Order.remove(query, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

module.exports = router;