class User {
	constructor(id, alias){
		this.id = id;
		this.alias = alias;
	}

	toJSON() {
		return {
			id: this.id,
			alias: this.alias
		}
	}
}

class Player extends User {
	constructor(id, alias){
		super(id);
		super(alias);
	}
}

class Spectator extends User {
	constructor(id, alias){
		super(id);
		super(alias);
	}
}

module.exports = {User:User,Player:Player,Spectator:Spectator};