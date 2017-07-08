const Game = require('../models/game');
const RoomManager = require('./roomManager');
const Crypto = require('crypto');

const Games = {}

exports.getGame = function (gameId) {
	return Games[gameId];
}

exports.createGame = function (room, users) {
	const gameId = Crypto.randomBytes(20).toString('hex');
	const game = new Game(gameId, room, users);

	Games[gameId] = game;
	return gameId;	
}

exports.updateGame = function (gameId, state){
	Games[gameId].updateState(state);
	return Games[gameId].state;
}

exports.endGame = function (gameId){
	delete Games[gameId];
}

exports.Games = Games;
