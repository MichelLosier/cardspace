const user$ = require('../services/userManager');

module.exports = (io, service) => {
    //ROOM EVENTS
    io.on('connection', function(socket){
        socket.emit('identify-req');
        socket.on('identify-res', function(data){
            const user = user$.getUser(data.uid);
            console.log('heard identify-res')
            //PUT BETTER VALIDATION HERE
            if (user) {
                user$.updateUserSocketId(user.id, socket.id);
            }
        })
        console.log('a user connected')
      });      

    const room = io.of('/room');
    room.on('connection', function(socket){
       //Event subscriptions
        eventServiceSubscribe('$_USER_LIST_CHANGE', socket)
    });
    //User Association



    //GAME EVENTS
    const game = io.of('/game')
    game.on('connection', function(socket){
        socket.emit('user joined a game');
    });

    //Subscriber for listening for socket prepared events
    function eventServiceSubscribe(event, socket){
        service.on(event, (data) => {
            socket.emit(event, JSON.stringify(data));
        });
    }
}