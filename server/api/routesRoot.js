
var RoutesRoot = {

}

RoutesRoot.GET = function(req, res) {
	res.json({"GET":"world"});
}

RoutesRoot.POST = function(req, res) {
	res.json({"POST":"world"});
}


module.exports = RoutesRoot;