class Room { // session
	constructor(id){
		this.id = id;
		this.players = [];
		this.games = [];
	}
	
	addPlayers (players = []){
		this.players.concat(player);
	}

	toJSON() {
		return {
			id: this.id,
			players: this.players,
			games: this.games
		}
	}

}

module.exports = Room;