
module.exports = (io, service) => {
    //ROOM EVENTS
    const room = io.of('/room');
    room.on('connection', function(socket){
        socket.emit('user joined a room');
       //Event subscriptions
        eventServiceSubscribe('$_USER_LIST_CHANGE', (data) => {
             socket.emit(event, JSON.stringify(_data));
        });
        eventServiceSubscribe('$_ADD_USER_TO_ROOM', (data) => {
            socket.join(data.roomId)
        });
    });

    //GAME EVENTS
    const game = io.of('/game')
    game.on('connection', function(socket){
        socket.emit('user joined a game');
    });

    //Subscriber for listening for socket prepared events and sends transport
    //Name event subscribed to
    //Pass socket instance to be used
    //Pass callback to transform data
   
    function eventServiceSubscribe(event, callback){
        callback = callback || ((data) => {return data});
        service.on(event, (data) => {
            const _data = callback(data)
        });
    }
}