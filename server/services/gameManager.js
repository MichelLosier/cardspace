import { Game } from '../models/game';
import { RoomManager } from '../services/roomManager';
import { crypto } from 'crypto' as Crypto;

this.games = []

createGame = function (room, users) {
	const gameId = Crypto.randomBytes(20);
	const game = new Game(gameId, room, users);
	this.games.push(game);
	return gameId;
	
}

updateGame = function (gameId, state){

}

endGame = function (){

}


export {createGame, updateGame, endGame}