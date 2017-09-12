import io from 'socket.io-client';


class SocketService {
    constructor(){
        this.baseUrl = `${window.location.protocol}//${window.location.host}/api/sockets/`;
    }
}

const _SocketService = new SocketService();

export default _SocketService;