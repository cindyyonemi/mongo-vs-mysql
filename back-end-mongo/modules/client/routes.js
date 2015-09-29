var express = require('express');
var router = express.Router();
var Client = require('./model');
var Order = require('../order/model');

router.get('/', function(req, res) {
	Client.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});

router.get('/:id', function(req, res) {
	var query = { _id: req.params.id };

	Client.findOne(query, function(err, data) {
		if (err) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

router.post('/', function(req, res) {
	var client = new Client(req.body);
     
	client.save(function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

router.put('/:id', function(req, res) {
	var query = { _id: req.params.id };
	var mod = req.body;
	delete mod._id;

	Client.update(query, mod, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

router.delete('/:id', function(req, res) {
	var query = { _id: req.params.id };

	Client.remove(query, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

router.get('/ByCidade/:cidade', function(req, res) {
	var query = { cidade: req.params.cidade};

	Client.find(query, function(err, data) {
		if (err) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

router.get('/juncao/ByCidade/:cidade', function(req, res) {
	var query = { cidade: req.params.cidade};
	Client.find(query)
		.populate('orders')
		.exec(function (err, data) {
		if (err) {
			res.sendStatus(404);
		} else {
			next(0, data, res);
		}
	});
});

router.get('/juncao/id', function(req, res) {
	Client.find({})
		.populate('orders')
		.exec(function (err, data) {
		if (err) {
			res.sendStatus(404);
		} else {
			next(0, data, res);
		}
	});
});

function next(i, array, res){
	cliente = array[i];
	Order.find({cliente : cliente._id})
		.exec(function (err, orders) {
		cliente.orders = orders;
		if(i < array.length-1){
			next(i+1, array, res);
		}else{
			res.json(array);
		}
	});
}



module.exports = router;