const api = require('./apihelpers');
var userId, roomId;

function log(method, data) {
    console.log(`\n//${method} ---------------------------------------`);
    console.log(`\n${data}`);
}
api.createRoom().then(function(data) {
    log('createRoom()', data);
    roomId = JSON.parse(data).id;
    return api.createUser("Bob Tribbia")
}).then(function(data) {

    log('createUser()', data);
    userId = JSON.parse(data).id;
    return api.joinRoom(roomId, userId)
}).then(function(data) {
    log('joinRoom()', data);
    return api.getRoom(roomId);
}).then(function(data) {
    return log('getRoom()', data);
})