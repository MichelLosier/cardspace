const Room = require('../models/room');
const Crypto = require('crypto');

const rooms = {};
const DEFAULT_ROOM_SIZE = 4;
const DEFAULT_ROOM_OWNER = "Anonymous"

exports.createRoom = function(owner, alias,roomSize) {

	alias = alias ? alias : generateRoomAlias();
	roomSize = roomSize ? roomSize : DEFAULT_ROOM_SIZE;
	owner = owner ? owner : DEFAULT_ROOM_OWNER;

	let roomId = generateRoomId(20);
	rooms[roomId] = new Room(roomId,alias,roomSize,owner);
	
	return rooms[roomId];
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
	let room = rooms[id];
	if (room.users.indexOf(userId) > -1) {
		room.removeUser(userId);
	} else {
		throw Error(`${userId} not found in room ${id}`)
	}
}

exports.getRooms = function () {
	var roomArray = [];
	for (var roomId in rooms) { 
		roomArray.push(rooms[roomId])
	}
	return roomArray;
}

exports.getRoom = function (id) {
	return rooms[id];
}

exports.roomExists = function(id) {
	return rooms[id] ? true : false;
}

function generateRoomId(byteLen) {
	return Crypto.randomBytes(byteLen).toString('hex');
}

function generateRoomAlias() {
	let owners = ["Mike","Bob","Manyon","Ol' Gil","Trump","Dr. Phil","God"];
	let adjectives = ["messy","radiant","decrepit","immaculate","final","understated","private","personal","outrageous", "disgusting", "super fun", "super lame"];
	let spaces = ["game area","office","chillzone","living room","house","outhouse","bedroom","garage","man cave"];

	return `${owners[Math.floor(Math.random()*owners.length)]}'s ${adjectives[Math.floor(Math.random()*adjectives.length)]} ${spaces[Math.floor(Math.random()*spaces.length)]}`
}

