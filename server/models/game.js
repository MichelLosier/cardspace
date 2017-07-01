class Game {
	constructor(id, room, users = []){
		this.id = id;
		this.roomId = room;
		this.players = users;
		this.state = {};
		//TODO
	}
	updateState(state){
		this.state = state;
	}
}

class Deck {
	construtor(cards = []){
		this.cards = cards;
	}

	addCards(cards = []){
		this.cards.concat(cards);
		//TODO 
	}

	shuffle(){
		//TODO
	}
}

class Card {
	constructor() {
		//TODO
	}
}
export {Game}