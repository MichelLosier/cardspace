import { Game } from '../models/game';
import { RoomManager } from '../services/roomManager';
import { crypto } from 'crypto' as Crypto;

const games = {}

getGame = function (gameId) {
	return games[gameId];
}

createGame = function (room, users) {
	const gameId = Crypto.randomBytes(20);
	const game = new Game(gameId, room, users);

	games[gameId] = game;
	return gameId;	
}

updateGame = function (gameId, state){
	games[gameId].updateState(state);
	return games[gameId].state;
}

endGame = function (gameId){
	delete games[gameId];
}


export {createGame, updateGame, endGame}