

class RoomService {
    constructor(){
        this.baseUrl = `api/room/`;
        this.baseHeaders = new Headers({
            'Content-Type': 'application/json'
        });
    }
    //get all rooms
    getRooms(callback){
        const request = new Request(`${this.baseUrl}`, {
            method: 'GET',
            headers: this.baseHeaders
        });
        fetch(request).then((response) => {
            return response.json();
        }).then((data) => {
            if (callback) callback(data);
            return data;
        })
        .catch((err) => {
            return console.log(err);
        })
    }


    //Get a room
    getRoom(id, callback){
        const request = new Request(`${this.baseUrl}?:${id}`, {
            method: 'GET',
            headers: this.baseHeaders
        });
        fetch(request).then((response) => {
            return response.json();
        }).then((data) => {
            if (callback) callback(data);
            return data;
        })
        .catch((err) => {
            return console.log(err);
        })
    }


    //Create a room
    createRoom(headers, data, callback){
        const _headers = this.baseHeaders.assign(JSON.stringify(headers));
        const request = new Request(`${this.baseUrl}create`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: _headers
        });
        fetch(request).then((response) => {
            return response.json();
        }).then((data) => {
            if(callback) callback(data);
            return data;
        })
        .catch((err) => {
            return console.log(err);
        })
    }

    //Update room
    // Join/Leave room
    // Expects:
    //     HEADER:  user-id: "USER_ID" 
    //	   BODY: {
    //			action: "JOIN" or "LEAVE"
    //		}
    updateRoom(id, data, callback){
        const headers = {
            'user-id': localStorage.getItem('uid')
        }
        _headers = baseHeaders.assign(headers);
        const request = new Request(`${this.baseUrl}?:${id}`, {
            method: 'PATCH',
            headers: this.baseHeaders,
            body: data
        });
        fetch(request).then((response) => {
            return response.json();
        }).then((data) => {
            if (callback) callback(data);
            return data;
        })
        .catch((err) => {
            return console.log(err);
        })
    }

}

export default RoomService