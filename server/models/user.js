class User {
	constructor(id, alias){
		this.id = id;
		this.alias = alias;
		this.socketId = '';
	}

	toJSON() {
		return {
			id: this.id,
			alias: this.alias,
			socket: this.socketId
		}
	}
	setSocketId(sid){
		this.socketId = sid;
	}
}

class Player extends User {
	constructor(id, alias){
		super(id, alias);
	}
}

class Spectator extends User {
	constructor(id, alias){
		super(id, alias);
	}
}

module.exports = {User:User,Player:Player,Spectator:Spectator};