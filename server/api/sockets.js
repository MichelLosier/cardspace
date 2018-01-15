
module.exports = (io, service) => {
    io.on('connection', function(socket){
        console.log(`a user connected: ${socket.id}`)
      });
    //ROOM EVENTS
    const room = io.of('/room');
    const game = io.of('/game')

    room.on('connection', function(socket){
        console.log('user join room NSP');

        socket.on('$_JOIN_ROOM', (data) => {
            console.log(`heard event '$_JOIN_ROOM on /room`);
            service.emit('ROOM_USER_CHECK', data);
        });
       //Event subscriptions
        eventSub('$_USER_LIST_CHANGE', (data) => {
             socket.emit('$_USER_LIST_CHANGE', JSON.stringify(data));
        });
        eventSub('$_ROOM_USER_CHECK', (data) => {
            let response = {res: `You are not allowed to join the channel for room: ${data.roomId} `}
            if (data.allowed) {
                socket.join(data.roomId)
                response.res = `You have successfully joined the channel for room: ${data.roomId}`
            }
            socket.emit('$_JOIN_ROOM', JSON.stringify(response));
        });
    });


    //GAME EVENTS
    
    game.on('connection', function(socket){
        socket.emit('user joined a game');
    });

    //Subscriber for listening for socket prepared events and sends transport
    //Name event subscribed to
    //Pass socket instance to be used
    //Pass callback to transform data
   
    function eventSub(event, callback){
        callback = callback || ((data) => {return data});
        service.on(event, (data) =>{
           callback(data);
        });
    }
}