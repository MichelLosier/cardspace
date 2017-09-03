
// get user
//TODO get id from local storage
class UserService {

    constructor(){
        this.baseUrl = `${window.location.protocol}//${window.location.host}/api/user/`;
        this.baseHeaders = new Headers({
            'Content-Type': 'application/json'
        });
    }

    getUser(id, callback){
        const request = new Request(`${this.baseUrl}${id}`, {
            method: 'GET',
            headers: this.baseHeaders
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


    //create user
    createUser(user, callback){
        const data = {
            alias: user
        };
        const request = new Request(`${this.baseUrl}create`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: this.baseHeaders
        });
        fetch(request).then((response) => {
            return response.json();
        }).then((data) => {
            localStorage.setItem('uid', data.id);
            if(callback) callback(data);
            return data;
        })
        .catch((err) => {
            return console.log(err);
        })
    }
    //

    //handleError(err){
    //     const body = JSON.parse(err);
    //     const errMsg = body.error || JSON.stringify(body)
    //     const error = `${err.status} - ${err.statusText || ''} ${errMsg}`;
    //     console.log(error);
    //     return error
    // }
}

export default UserService;