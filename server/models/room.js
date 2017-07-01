class Room { // session
	constructor(id, game, players = []){
		this.id = id;
		this.game = game;
		this.players = players; //takes array
	}
	
	addPlayers (players = []){
		this.players.concat(player);
	}

}

export {Room}