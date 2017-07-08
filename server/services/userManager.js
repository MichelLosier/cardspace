const User = require('../models/user');
const Crypto = require('crypto');

const users = {};

exports.createUser = function(alias) {
	let userId = generateId(20);
	users[userId] = new User.User(userId, alias);
	
	return userId;
}

exports.getUsers = function () {
	return users;
}

exports.getUser = function (id) {
	return users[id];
}

function generateId(byteLen) {
	return Crypto.randomBytes(byteLen).toString('hex');
}
