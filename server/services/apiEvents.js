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

apiEventEmitter.on('ROOM_UPDATE', function(room){
    const _room = JSON.parse(JSON.stringify(room));
    _room.users = _room.users.map(function(user){
        return userManager.getUser(user);
    })
    
    apiEventEmitter.emit('$_ROOM_UPDATE', _room);
});

apiEventEmitter.on('ROOM_USER_CHECK', function(data){
    console.log(`checking for ${data.uid} in room ${data.roomId}`);
    let check = {
        roomId: data.roomId,
        allowed: false
    }
    const room = roomManager.getRoom(data.roomId);
    if (room.users.indexOf(data.uid) > -1){
        console.log(`check passed`);
        check.allowed = true
    }
    apiEventEmitter.emit('$_ROOM_USER_CHECK', check);
})

exports.emitter = apiEventEmitter;