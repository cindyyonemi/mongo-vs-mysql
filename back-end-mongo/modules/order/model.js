var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	dataHora: {Type: Date },
	desconto: Number,
	valorTotal: Number,
	formaPgto: String,
	cliente: {type:mongoose.Schema.ObjectId, ref: 'Client'},
	itemPedido : [ { quantidade : Number, produto : {type:mongoose.Schema.ObjectId, ref: 'Product'}} ]
});

module.exports = mongoose.model('Order', orderSchema);