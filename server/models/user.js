class User {
	constructor(name){
		this.name = name;
	}
}

class Player extends User {
	constructor(name){
		super(name);
	}
}

class Spectator extends User {
	constructor(name){
		super(name);
	}
}

module.exports = {User:User,Player:Player,Spectator:Spectator};