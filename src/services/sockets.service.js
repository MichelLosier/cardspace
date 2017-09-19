import io from 'socket.io-client';

const baseUrl = `${window.location.protocol}//${window.location.host}/api/sockets/`;
 
export const RoomSocket = io.connect(`${baseUrl}room`);
export const GameSocket = io.connect(`${baseUrl}game`);

RoomSocket.subscribeUserListChange = function (callback){
    RoomSocket.on('user-list-change', function(data){
        const _data = JSON.parse(data)
        callback(data);
    })
}