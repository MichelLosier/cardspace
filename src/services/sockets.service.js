import io from 'socket.io-client';

const baseUrl = `${window.location.protocol}//${window.location.host}`;


//Instatiate Socket Namespaces

const socket = io(`${baseUrl}`, {
    path: '/sockets'
});

export const RoomSocket = io(`${baseUrl}/room`, {
    path: '/sockets'
});

export const GameSocket = io(`${baseUrl}/game`, {
    path:'/sockets'
});

//Default Socket Actions

//RoomSocket Actions

RoomSocket.joinRoom = (data) => {
    console.log(`attempting to join room ${data.roomId}`)
    RoomSocket.emit('$_JOIN_ROOM', data);
}

RoomSocket.subscribeJoinRoom = (callback) => {
    RoomSocket.on('$_JOIN_ROOM', (data) => {
        const _data = JSON.parse(data)
        callback(_data)
        console.log(_data.res);
    })
}

//RoomSocket Subscriptions
RoomSocket.subscribeUserListChange = (callback) => {
    RoomSocket.on('$_USER_LIST_CHANGE', (data) => {
        const _data = JSON.parse(data)
        callback(_data);
    })
}

//
//GameSocket Actions
//