var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	descricao: {type: String, required: true},
	valorUnitario: {type: Number, required: true},
	qtdEstoque: {type: Number, required:true}
});

module.exports = mongoose.model('Product', productSchema);