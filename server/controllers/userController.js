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
		let newUser = userManager.createUser(req.body.alias);
		res.status(201).json(newUser);
	}
}

// GET - /api/user/:id
userRoutes.id.GET = function(req, res) {
	const user = userManager.getUser(req.params.id);
	if (user) {
		res.status(200).json(user.toJSON());
	} else {
		res.status(404).json({error:`${req.params.id} userId not found`});		
	}
}

// POST - /api/user/:id
userRoutes.id.POST = function(req, res) {
	res.status(200).json({"GET":"POST USER ID: " + req.params.id});
}

// GET - /api/user
userRoutes.GET = function(req, res) {

	let users = userManager.getUsers();
	res.status(200).json(users);
}

module.exports = userRoutes;

