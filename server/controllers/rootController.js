const authenticationService = require('../services/authentication.js');


// Middleware authentication fucnction
exports.authenticateUser = function(req, res, next) {
    var userId = req.headers['user-id'];

    if (userId) {
    	if (authenticationService.authenticateUser(userId)) {
            console.log(`User ${userId} authenticated`);
    	} else {
    		res.status(401).json({message:"Unauthorized"});
            return
    	}
    } 
    next();
};
