
module.exports = (io, service) => {
    //ROOM EVENTS
    const room = io.of('/room');
    room.on('connection', function(socket){
        socket.emit('user joined a room');
       //Event subscriptions
        eventServiceSubscribe('$_USER_LIST_CHANGE', socket)
    });

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