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

export {Player, Spectator}