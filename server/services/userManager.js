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

exports.updateUserSocketId = function(id, sid){
	console.log(`updating user: ${id}, with socketId: ${sid}`);
	users[id].setSocketId(sid);
}

function generateId(byteLen) {
	return Crypto.randomBytes(byteLen).toString('hex');
}
