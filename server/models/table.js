class Table { // session
	constructor(game, players = []){
		this.game = game;
		this.players = players; //takes array
	}
	
	function addPlayers (players = []){
		this.players.concat(player);
	}
}

class TableManager {
	constructor(tables = []) {
		this.tables = tables;
	}
	function addTables (tables = []){
		this.tables.concat(tables);
	}
}
export {table}