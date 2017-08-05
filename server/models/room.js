const DEFAULT_ROOM_SIZE = 4;

class Room { // session
	constructor(id, roomSize){
		this.id = id;
		this.users = [];
		this.games = [];
		this.roomSize = roomSize ? roomSize : DEFAULT_ROOM_SIZE;
	}
	
	addUsers (users = []){
		this.users.concat(user);
	}

	addUser (id) {
		this.users.push(id);
	}

	

	toJSON() {
		return {
			id: this.id,
			users: this.users,
			roomSize: this.roomSize,
			games: this.games
		}
	}

}

module.exports = Room;