const roomManager = require('../services/roomManager');
const gameManager = require('../services/gameManager');
const userManager = require('../services/userManager')

exports.room = io.of('/room')

room.on('connection', function(socket){
        socket.on('get-users', function(data){
            data = JSON.parse(data);
            const room = roomManager.getRoom(data.id);
            const users = room.users.map(function(user){
               return userManager.getUser(user)
            });
            socket.emit(JSON.stringify(users));
        });
    });

exports.game = io
    .of('/game')
    .on('connection', function(socket){
        socket.emit()
    });
