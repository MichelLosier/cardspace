var request = require('request');
//CREATE ROOM
exports.createRoom = function() {
    return new Promise(function(resolve, reject) {
        var options = {
            method: 'POST',
            url: 'http://localhost:8080/api/room/create'
        }
        request(options, function(error, response, body) {
            if (error) {
                reject(error)
            } else {
                resolve(body);
            }
        });
    });
}
//CREATE USER
exports.createUser = function(alias) {
    return new Promise(function(resolve, reject) {
        var options = {
            method: 'POST',
            url: 'http://localhost:8080/api/user/create',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                alias: alias ? alias : 'JOE SCHMOE'
            },
            json: true
        };
        request(options, function(error, response, body) {
            if (error) {
                reject(error)
            } else {
                resolve(JSON.stringify(body));
            }
        });
    });
}
// //JOIN ROOM
exports.joinRoom = function(roomId, userId) {
    return new Promise(function(resolve, reject) {
        var options = {
            method: 'PATCH',
            url: 'http://localhost:8080/api/room/' + roomId,
            headers: {
                'content-type': 'application/json',
                'user-id': userId
            },
            body: {
                action: 'JOIN'
            },
            json: true
        };
        request(options, function(error, response, body) {
            if (error) {
                reject(error)
            } else {
                resolve(JSON.stringify(body));
            }
        });
    });
}

//GET ROOM
exports.getRoom = function(roomId) {
    return new Promise(function(resolve, reject) {
        var options = {
            method: 'GET',
            url: 'http://localhost:8080/api/room/' + roomId
        }
        request(options, function(error, response, body) {
            if (error) {
                reject(error)
            } else {
                resolve(body);
            }
        });
    });
}