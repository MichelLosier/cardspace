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
    RoomSocket.emit('$_JOIN_ROOM', data);
}

RoomSocket.subscribeJoinRoom = (callback) => {
    RoomSocket.on('$_JOIN_ROOM', (data) => {
        const _data = JSON.parse(data)
        callback(_data)
    })
}

//RoomSocket Subscriptions
RoomSocket.subscribeRoomUpdates = (callback) => {
    RoomSocket.on('$_ROOM_UPDATE', (data) => {
        const _data = JSON.parse(data)
        callback(_data);
    })
}

//
//GameSocket Actions
//