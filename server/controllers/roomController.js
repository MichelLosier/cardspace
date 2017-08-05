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

// PATCH - /api/room/:id
// Join/Leave room
// Expects:
//     HEADER:  user-id: "USER_ID" 
//	   BODY: {
//			action: "JOIN" or "LEAVE"
//		}
roomRoutes.id.PATCH = function(req, res) {

	var userId = req.headers['user-id'];
	var action = req.body.action;
	var roomId = req.params.id;
	let room = roomManager.getRoom(roomId);

	//Room doesn't exist
	//TODO: Place this logic outside of this function for all /roomid/ calls
	if (!room) {
		res.status(400).json({message: `Room ${req.params.id} not found` })
		return;
	}

	//User id == null
	if (!userId) {
		res.status(401).json({message: `No user-id found.` })
		return;
	}

	//Specific JOIN / LEAVE calls
	if (action == "JOIN") {
		try {
			roomManager.addUser(roomId,userId)
		} catch (err) {
			res.status(500).json({error:err.message});
			return;
		}
	} else if (action == "LEAVE") {
		try {
			//This doesn't actually work yet
			roomManager.removeUser(roomId,userId)
		} catch (err) {
			res.status(500).json({error:err.message});
			return;
		}
		
	} else {
		res.status(400).json({message: "Accepted action values: JOIN, LEAVE"})
		return;
	}

	// Everything went fine? Return updated room status as JSON
	res.status(200).json(room.toJSON())

}

// GET - /api/room
roomRoutes.GET = function(req, res) {

	let rooms = roomManager.getRooms();
	res.status(200).json(rooms);
}

module.exports = roomRoutes;

