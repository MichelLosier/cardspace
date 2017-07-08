const userManager = require('../services/userManager');

let userRoutes = {
	create: {},
	id: {}
}

// POST - /api/user/create
userRoutes.create.POST = function(req, res) {
	//User manager controller create room, get relevant data, send back
	if (!req.body.alias) {
		res.status(400).json({"reason":"missing user alias"})
	} else {
		let newUserId = userManager.createUser(req.body.alias);
		res.status(201).json({"POST":"USER CREATED - ID:" + newUserId});
	}
}

// GET - /api/user/:id
userRoutes.id.GET = function(req, res) {
	
	//get userJSON by ID
	let userJSON = userManager.getUser(req.params.id).toJSON();
	res.status(200).json(userJSON);
}

// POST - /api/user/:id
userRoutes.id.POST = function(req, res) {
	res.status(200).json({"GET":"POST USER ID: " + req.params.id});
}

// GET - /api/user
userRoutes.GET = function(req, res) {

	let users = userManager.getUsers();
	let response = [];

	for (userId in users) {
		response.push(users[userId].toJSON());
	}

	res.status(200).json(response);
}

module.exports = userRoutes;

