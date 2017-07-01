import * as GM from '../services/gameManger';

createGame = function(req, res, next) {
	return GM.createGame(req.room, req.users);
};

export { createGame }