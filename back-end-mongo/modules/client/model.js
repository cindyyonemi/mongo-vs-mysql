var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
	name: { type: String, required: true }
});

module.exports = mongoose.model('Client', clientSchema);