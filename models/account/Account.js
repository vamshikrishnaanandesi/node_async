const mongoose = require('mongoose');

const Account = new mongoose.Schema({
	email: {type: String, required: true, index: { unique: true, dropDups: true }},
	name: {type: String},
	age: {type: Number},

}, {timestamps: true});

Account.index({"email": {unique: true } } )

module.exports = mongoose.model('Account', Account);
