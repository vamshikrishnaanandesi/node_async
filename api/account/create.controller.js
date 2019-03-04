const Account = require('../../models/account/Account');
var HttpStatus = require('http-status-codes');

const create = async function(req, res, next) {
	const {email, name, age} = req.body;
	const account = new Account({email, name, age});
	await account.save()
	.then((response) => {
		console.log(response)
		return res.json({message: 'success'}, HttpStatus.CREATED);
	})
	.catch((err) => {
		if (err.code == 11000) {
			return res.json({err: 'email already exists'}, HttpStatus.CONFLICT)
		}
		else {
			return res.json( {err: 'Internal server error' }, HttpStatus.INTERNAL_SERVER_ERROR )
		}
	})
};

module.exports = create;