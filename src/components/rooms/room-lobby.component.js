import React from 'react';
import RoomList from './room-list.component';

import RoomService from '../../services/room.service';

const Room$ = new RoomService();

class RoomLobby extends React.Component {
    constructor(){
        super();
        this.state = {
            rooms: [],
            selectedRoom: undefined
        };
        this.setSelectedRoom = this.setSelectedRoom.bind(this);
    }

    componentWillMount(){
        this.getRoomList();
    }

    setSelectedRoom(room) {
        this.setState({selectedRoom: room});
    }

    getRoomList(){
        Room$.getRooms((rooms) => {
            this.setState({rooms: rooms });
        });
    }

    render(){
        const roomList = this.state.rooms;
        
        return(
            <div className="layout-container">
                <RoomList
                    roomList={roomList}
                    onRoomSelect={this.setSelectedRoom}
                />
            </div>
        );
    }
}

export default RoomLobby;
