const EventEmitter = require('events');

class APIEventEmitter extends EventEmitter{};
const apiEventEmitter = new APIEventEmitter();

const roomManager = require('../services/roomManager');
const gameManager = require('../services/gameManager');
const userManager = require('../services/userManager');

//Middleware for Server Events and Forwarding to Socket Transport
//Handles Events in the API - Makes data requests and tranformations
//To be sent for Socket transport to Clients
//Basically transforms server event to client ingestible event
//Server events get renamed with $ at beginning to mark as socket event

apiEventEmitter.on('USER_LIST_CHANGE', function(data){
    const roomObj = roomManager.getRoom(data.id);
    const users = roomObj.users.map(function(user){
        return userManager.getUser(user);
    })
   apiEventEmitter.emit('$_USER_LIST_CHANGE', users);
});

exports.emitter = apiEventEmitter;