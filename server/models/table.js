class Table { // session
	let players = [];

	constructor(game, players){
		this.game = game;
		this.players = players; //takes array
	}
	
	function addPlayer (player){
		this.players.push(player);
	}
}

class TableManager {
	constructor(tables) {
		this.tables = tables;
	}
	function addTable (table){
		this.tables.push(table);
	}
}
export {table}