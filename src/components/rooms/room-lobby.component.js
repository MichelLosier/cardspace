import React from 'react';
import RoomList from './room-list.component';
import RoomDetail from './room-detail.component';

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

    componentDidMount(){
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
        const selectedRoom = this.state.selectedRoom;
        const list = this.state.rooms;
        return(
            <div className="center-align width-12">
                <div className="header">
                    <h2>Room Lobby</h2>
                </div>
                <div className="layout-container">
                    {(selectedRoom) && 
                        <RoomDetail
                            room={selectedRoom}
                        />
                    }
                    <RoomList
                        list={list}
                        onRoomSelect={this.setSelectedRoom}
                        selectedRoom={selectedRoom}
                    />
                </div>
            </div>
        );
    }
}

export default RoomLobby;
