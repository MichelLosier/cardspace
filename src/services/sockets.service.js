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

socket.on('identify-req', function(){
    //TODO GET USER ID Then Emit
    console.log(`Heard event 'identify-req'`)
    const uid = localStorage.getItem('uid');
    if (uid) {
       identify(uid);
    }
})

export const identify = function identify(uid){
    console.log(`identify called with ${uid}`);
    const user = {uid: uid};
    socket.emit('identify-res', user);
}

RoomSocket.subscribeUserListChange = function (callback){
    RoomSocket.on('$_USER_LIST_CHANGE', function(data){
        const _data = JSON.parse(data)
        callback(_data);
    })
}