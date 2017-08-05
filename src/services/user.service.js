const baseUrl = `api/user/`;
const baseHeaders = new Headers({
    'Content-Type': 'application/json'
});
// get user
//TODO get id from local storage
function getUser(id){
    const request = new Request(`${baseUrl}${id}`, {
        method: 'GET',
        headers: baseHeaders.assign({
            'User-Id': localStorage.getItem('user')
        })
    });
    fetch(request).then((response) => {
        return response.json();
    })
    .catch((err) => {
        return this.handleError(err);
    })
}


//create user
function createUser(user){
    const data = JSON.stringify({
        alias: user.alias
    });
    const request = new Request(`${baseUrl}`,{
        method: 'POST',
        body: data,
        headers: baseHeaders
    });
    fetch(request).then((response) => {
        const user = {
            _id: response.body
        }
        localStorage.setItem('user', user);
        return response.json();
    })
    .catch((err) => {
        return this.handleError(err);
    })
}
//

function handleError(err){
    const body = err.json()
    const errMsg = body.error || JSON.stringify(body)
    const error = `${err.status} - ${err.statusText || ''} ${errMsg}`;
    console.log(error);
    return error
}