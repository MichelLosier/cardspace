const roomManager = require('../services/roomManger');

exports.createRoom = function() {
	return roomManager.createRoom();
}
