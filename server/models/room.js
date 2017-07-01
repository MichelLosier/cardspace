class Room { // session
	constructor(id){
		this.id = id;
		this.players = [];
		this.games = [];
	}
	
	addPlayers (players = []){
		this.players.concat(player);
	}

}

module.exports = Room;