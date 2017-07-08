const GM = require('../services/gameManager');

exports.createGame = function(req, res, next) {
	return GM.createGame(req.room, req.users);
};
