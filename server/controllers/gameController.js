const GM = require('../services/gameManger');

exports.createGame = function(req, res, next) {
	return GM.createGame(req.room, req.users);
};
