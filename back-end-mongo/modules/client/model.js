var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
	name: { type: String, required: true },
	CPF: {type:String, required:true, index: {unique:true}},
	dataNascimento: {type : Date},
	telefone: {type:String},
	rua: String,
	numero: String,
	bairro: String,
	CEP: Number,
	cidade: String,
	estado: String,
	orders: [{type:mongoose.Schema.ObjectId, ref: 'Order'}]
});

module.exports = mongoose.model('Client', clientSchema);