const Room = require('../models/room');
const Crypto = require('crypto');

const rooms = {};

exports.createRoom = function  () {
	let roomId = generateId(20);
	rooms[roomId] = new Room(roomId);
	
	return roomId;
}

exports.getRooms = function () {
	return rooms;
}

exports.getRoom = function (id) {
	return rooms[id];
}

function generateId(byteLen) {
	return Crypto.randomBytes(byteLen).toString('hex');
}

