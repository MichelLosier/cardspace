import React from 'react';
import RoomList from './room-list.component';
import RoomDetail from './room-detail.component';
import RoomCreate from './room-create.component';

import RoomService from '../../services/room.service';

const Room$ = new RoomService();

class RoomLobby extends React.Component {
    constructor(){
        super();
        this.state = {
            rooms: [],
            selectedRoom: undefined,
            roomCreateVisible: false
        };
        this.setSelectedRoom = this.setSelectedRoom.bind(this);
        this.showRoomCreate = this.showRoomCreate.bind(this);
        this.finishRoomCreate = this.finishRoomCreate.bind(this);
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

    showRoomCreate() {
        this.setState({roomCreateVisible: true})
    }

    finishRoomCreate(updateRooms) {
        this.setState({roomCreateVisible: !this.state.roomCreateVisible}) 
        if (updateRooms == true) {
            this.getRoomList()
        }
    }

    render(){
        const selectedRoom = this.state.selectedRoom;
        const list = this.state.rooms;
        return(
            <div className="center-align width-12">
                {this.state.roomCreateVisible ? <RoomCreate onFinish={this.finishRoomCreate} /> : null}
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
                        onShowRoomCreate={this.showRoomCreate}
                    />
                </div>
            </div>
        );
    }
}

export default RoomLobby;
