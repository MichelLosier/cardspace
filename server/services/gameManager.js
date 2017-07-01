import { Game } from '../models/game';
import { RoomManager } from '../services/roomManager';
import { crypto } from 'crypto' as Crypto;

class GameManager {
	constructor() {
		this.games = [];
	}

	createGame(room, users) {
		const gameId = Crypto.randomBytes(20);
		const game = new Game(gameId, room, users);
		this.games.push(game);
		
	}

	updateGame(gameId, state){

	}

	endGame(){

	}
}

export {GameManager}