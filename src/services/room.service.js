

class RoomService {
    constructor(){
        this.baseUrl = `${window.location.protocol}//${window.location.host}/api/room/`;
        this.baseHeaders = {
            'Content-Type': 'application/json'
        };
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
        const request = new Request(`${this.baseUrl}${id}`, {
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
    createRoom(name,size, callback){
        const data = {
            alias: name,
            roomSize: size
        }

        const headers =  new Headers(Object.assign(this.baseHeaders,{'user-id': localStorage.getItem('uid')}));
        const request = new Request(`${this.baseUrl}create`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
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
        const headers = new Headers(Object.assign(this.baseHeaders, {
                'user-id': localStorage.getItem('uid')
            }));
        const request = new Request(`${this.baseUrl}${id}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
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

export default RoomService;