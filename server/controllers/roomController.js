const roomManager = require('../services/roomManager');

let roomRoutes = {
	create: {},
	id: {}
}

// POST - /api/room/create
roomRoutes.create.POST = function(req, res) {
	//Room manager controller create room, get relevant data, send back
	let newRoomId = roomManager.createRoom();
	res.status(201).json({"POST":"ROOM CREATED - ID:" + newRoomId});
}

// GET - /api/room/:id
roomRoutes.id.GET = function(req, res) {
	
	//get roomJSON by ID
	let roomJSON = roomManager.getRoom(req.params.id).toJSON();
	res.status(200).json(roomJSON);
}

// POST - /api/room/:id
roomRoutes.id.POST = function(req, res) {
	res.status(200).json({"GET":"POST ROOM ID: " + req.params.id});
}

// GET - /api/room
roomRoutes.GET = function(req, res) {

	let rooms = roomManager.getRooms();
	res.status(200).json(rooms);
}

module.exports = roomRoutes;

