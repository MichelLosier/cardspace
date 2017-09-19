const server = require('../server')
const io = server.io;

const roomManager = require('../services/roomManager');
const gameManager = require('../services/gameManager');
const userManager = require('../services/userManager')

exports.room = io.of('/room')

room.on('connection', function(socket){
    //event initiated directly from client - no server verfication
    socket.on('USER_LIST_CHANGE', function(data){
        data = JSON.parse(data);
        const users = room.ctrl.getUserList(data.id);
        socket.emit('USER_LIST_CHANGE', JSON.stringify(users));
    });
});

//Event reducer - Stand-in for Redux
room.reducer = function(event, data){
    switch (event) {
        case 'USER_LIST_CHANGE':
            room.ctrl.getUserList(data.id, data)
        default:
            console.log(`event '${event}' not found \n data: ${JSON.stringify(data)}`);
    }
}


room.ctrl.getUserList = function(id, data){
    const roomObj = roomManager.getRoom(id);
    const users = roomObj.users.map(function(user){
        return userManager.getUser(user)
    });
    Sockets.room.emit('USER_LIST_CHANGE', JSON.stringify(data));
}

///

exports.game = io.of('/game')

game.on('connection', function(socket){
        socket.emit()
    });

