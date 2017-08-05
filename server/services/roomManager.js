const Room = require('../models/room');
const Crypto = require('crypto');

const rooms = {};

exports.createRoom = function  () {
	let roomId = generateId(20);
	rooms[roomId] = new Room(roomId);
	
	return roomId;
}

exports.addUser = function (id, userId) {
	let room = rooms[id];
	if (room.users.indexOf(userId) > -1) {
		console.log('User already a member')
		throw Error(`Cannot add  user ${userId} to room ${id}. Reason: User already a member of room`);
	}

	if (room.users.length == room.roomSize) {
		console.log('Full room.')
		throw Error(`Cannot add  user ${userId} to room ${id}. Reason: Room is full`)
	}
	room.addUser(userId);
}

exports.removeUser = function (id, userId) {
	//TODO: Everything..
}

exports.getRooms = function () {
	return rooms;
}

exports.getRoom = function (id) {
	return rooms[id];
}

exports.roomExists = function(id) {
	return rooms[id] ? true : false;
}

function generateId(byteLen) {
	return Crypto.randomBytes(byteLen).toString('hex');
}

