import React from 'react';

import RoomService from '../../services/room.service';

class RoomLobby extends React.Component {
    
    constructor(){
        super();
        this.state = {
            rooms: [],
            selectedRoom: undefined
        };
    }

    setSelectedRoom(room) {
        this.setState({selectedRoom: room});
    }

    getRoomList(){
        RoomService.getRooms();
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default RoomLobby;
