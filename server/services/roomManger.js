import {Room} from '../models/room'

class RoomManager {
	constructor() {
		this.Rooms = Rooms;
	}

	createRoom () {
		let roomId = this.Rooms.length;
		let newRoom = new Room(roomId, games, players); //Using array index as ID;
		this.Rooms.push(newRoom)
		
		return roomID
	}

	addRooms (Rooms = []){
		this.Rooms.concat(Rooms);
	}
}

export {RoomManager}