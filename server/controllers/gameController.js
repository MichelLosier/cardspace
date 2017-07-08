const GM = require('../services/gameManager');

exports.getAllGames = function(err, req, res, next){
	if (err) {
		return console.error.json(err);
	} else {
		return res.status(200).json(GM.Games);
	}
};

exports.getGame = function(err,req, res, next){
	const gameId = req.params._id;
	if (err) {
		return console.error.json(err);
	} else {
		return res.status(200).json(GM.Games[gameId]);
	}
};

exports.createGame = function(err, req, res, next) {
	const newGame = GM.createGame(req.body.room, req.body.users);
	if (err) {
		return console.error.json(err + req);
	} else {
		return res.status(200).json(newGame);
	}
};