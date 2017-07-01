import { Room } from '../models/room'
import { crypto } from 'crypto' as Crypto;

let rooms = {};

function createRoom () {
	let roomId = generateId(20);
	rooms[roomId] = new Room(roomId, games, players);
	
	return roomId;
}

function getRooms() {
	return rooms;
}

function getRoom(id) {
	return rooms[id];
}

function generateId(byteLen) {
	return Crypto.randomBytes(byteLen);
}

export {createRoom,getRooms}