class Room { // session
	constructor(id, alias, roomSize, owner){
		this.id = id;
		this.alias = alias;
		this.users = [];
		this.games = [];
		this.roomSize = roomSize;
		this.owner = owner;
	}
	
	addUsers (users = []){
		this.users.concat(user);
	}

	addUser (id) {
		this.users.push(id);
	}

	removeUser(id) {
		this.users.splice(this.users.indexOf(id), 1)
	}

	

	toJSON() {
		return {
			id: this.id,
			users: this.users,
			roomSize: this.roomSize,
			games: this.games,
			alias: this.alias,
			owner: this.owner
		}
	}

}

module.exports = Room;