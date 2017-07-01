var roomRoutes = {
	create: {},
	id: {}
}


// POST - /api/room/create
roomRoutes.create.POST = function(req, res) {
	//Room manager controller create room, get relevant data, send back

	res.json({"POST":"ROOM CREATED - ID"});
}

// GET - /api/room/:id
roomRoutes.id.GET = function(req, res) {
	res.json({"GET":"GET ROOM ID: " + req.params.id});
}

// POST - /api/room/:id
roomRoutes.id.POST = function(req, res) {
	res.json({"GET":"POST ROOM ID: " + req.params.id});
}

// GET - /api/room
roomRoutes.GET = function(req, res) {
	res.json({"GET":"GET ALL ROOMS"});
}



module.exports = roomRoutes;