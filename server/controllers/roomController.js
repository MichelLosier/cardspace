const roomManager = require('../services/roomManager');
let roomRoutes = {
        create: {},
        id: {}
    }


// POST - /api/room/create
// Takes JSON payload for roomsize and alias:
// {  alias:"room alias",
//	  roomSize: 20 }
roomRoutes.create.POST = function(req, res) {
        //Room manager controller create room, get relevant data, send back
        var alias = req.body.alias;
        var roomSize = req.body.roomSize;
        if (alias && (typeof alias != "string")) {
            res.status(400).json({
                message: "alias requires a string"
            })
        }
        if (roomSize && (typeof roomSize != "number")) {
            res.status(400).json({
                message: "roomSize requires a number"
            })
        }
        let newRoom = roomManager.createRoom(res.locals.user, alias, roomSize);
        res.status(201).json(newRoom);
    }


// GET - /api/room/:id
roomRoutes.id.GET = function(req, res) {
        if (!roomManager.roomExists(req.params.id)) {
            res.status(404).json({
                message: req.params.id + ' not found'
            });
            return;
        }
        let roomJSON = roomManager.getRoom(req.params.id).toJSON();
        res.status(200).json(roomJSON);
    }


// POST - /api/room/:id
roomRoutes.id.POST = function(req, res) {
        res.status(200).json({
            "GET": "POST ROOM ID: " + req.params.id
        });
    }


// PATCH - /api/room/:id
// Join/Leave room
// Expects:
//     HEADER:  user-id: "USER_ID" 
//	   BODY: {
//			action: "JOIN" or "LEAVE"
//		}
roomRoutes.id.PATCH = function(req, res) {
        var action = req.body.action;
        var roomId = req.params.id;
        let room = roomManager.getRoom(roomId);
        //Room doesn't exist
        //TODO: Place this logic outside of this function for all /roomid/ calls
        if (!roomManager.roomExists(req.params.id)) {
            res.status(404).json({
                message: req.params.id + ' not found'
            });
            return;
        }
        //User id == null
        if (!res.locals.user) {
            res.status(401).json({
                message: `No user-id found.`
            })
            return;
        }
        //Specific JOIN / LEAVE calls
        if (action == "JOIN") {
            try {
                roomManager.addUser(roomId, res.locals.user)
            } catch (err) {
                res.status(500).json({
                    error: err.message
                });
                return;
            }
        } else if (action == "LEAVE") {
            try {
                roomManager.removeUser(roomId, res.locals.user)
            } catch (err) {
                res.status(500).json({
                    error: err.message
                });
                return;
            }
        } else {
            res.status(400).json({
                message: "Accepted action values: JOIN, LEAVE"
            })
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