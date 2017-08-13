const baseUrl = `api/user/`;
const baseHeaders = new Headers({
    'Content-Type': 'application/json'
});
// get user
//TODO get id from local storage
export function getUser(id, callback){
    const request = new Request(`${baseUrl}?id=${id}`, {
        method: 'GET',
        headers: baseHeaders
    });
    fetch(request).then((response) => {
        return response.json();
    }).then((data) => {
        if(callback){callback(data)};
        return data;
    })
    .catch((err) => {
         return console.log(err);
    })
}


//create user
export function createUser(user, callback){
    const data = {
        alias: user
    };
    const request = new Request(`${baseUrl}create`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: baseHeaders
    });
    fetch(request).then((response) => {
        return response.json();
    }).then((data) => {
        localStorage.setItem('uid', data.id);
        if(callback){callback(data);}
        return data;
    })
    .catch((err) => {
        return console.log(err);
    })
}
//

// function handleError(err){
//     const body = JSON.parse(err);
//     const errMsg = body.error || JSON.stringify(body)
//     const error = `${err.status} - ${err.statusText || ''} ${errMsg}`;
//     console.log(error);
//     return error
// }