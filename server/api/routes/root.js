var rootRoutes = {

}


// GET - /api/
rootRoutes.GET = function(req, res) {
	res.json({"GET":"root"});
}

// POST - /api/
rootRoutes.POST = function(req, res) {
	res.json({"POST":"root"});
}


export {rootRoutes}