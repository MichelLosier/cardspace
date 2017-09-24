import io from 'socket.io-client';

const baseUrl = `${window.location.protocol}//${window.location.host}`;
const socket = io(`${baseUrl}`, {
    path: '/sockets'
});
export const RoomSocket = io(`${baseUrl}/room`, {
    path: '/sockets'
});
export const GameSocket = io(`${baseUrl}/game`, {
    path:'/sockets'
});

RoomSocket.subscribeUserListChange = function (callback){
    RoomSocket.on('$_USER_LIST_CHANGE', function(data){
        const _data = JSON.parse(data)
        callback(_data);
    })
}