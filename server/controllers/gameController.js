const GM = require('../services/gameManager');

exports.getAllGames = function(req, res, next){
	return res.status(200).json(GM.Games);
};

exports.getGame = function(req, res, next){
	const gameId = req.params._id;
	return res.status(200).json(GM.Games[gameId]);

};

exports.createGame = function(req, res, next) {
	const newGame = GM.createGame(req.body.room, req.body.users);
	return res.status(200).json(newGame);
};