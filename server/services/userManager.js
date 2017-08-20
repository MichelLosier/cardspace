const User = require('../models/user');
const Crypto = require('crypto');

const users = {};

exports.createUser = function(alias) {
	let userId = generateId(20);
	users[userId] = new User.User(userId, alias);
	
	return users[userId];
}

exports.getUsers = function () {
	return users;
}

exports.getUser = function (id) {
	return users[id];
}

exports.userExists = function(id) {
	return users[id] ? true : false;
}

function generateId(byteLen) {
	return Crypto.randomBytes(byteLen).toString('hex');
}
