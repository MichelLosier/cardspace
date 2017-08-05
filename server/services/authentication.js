const userManager = require('./userManager');


//User authentication logic here
exports.authenticateUser = function(userId) {
	//TODO: Everything.. this is just a placeholder.
	let authenticated = userManager.userExists(userId);
	// let authenticated = true;

	return authenticated;
}