const Game = require('../models/game');
const RoomManager = require('../services/roomManager');
const Crypto = require('crypto');

const games = {}

exports.getGame = function (gameId) {
	return games[gameId];
}

exports.createGame = function (room, users) {
	const gameId = Crypto.randomBytes(20);
	const game = new Game(gameId, room, users);

	games[gameId] = game;
	return gameId;	
}

exports.updateGame = function (gameId, state){
	games[gameId].updateState(state);
	return games[gameId].state;
}

exports.endGame = function (gameId){
	delete games[gameId];
}


