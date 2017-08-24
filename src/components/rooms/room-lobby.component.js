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

    finishRoomCreate(newRoom) {
        this.setState({roomCreateVisible: !this.state.roomCreateVisible}) 
        if (newRoom.id) { //Checking for id (is this a room object) because otherwise an event object gets passed here.
            this.getRoomList()
            this.setSelectedRoom(newRoom);
        }
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
                    {this.state.roomCreateVisible && <RoomCreate onFinish={this.finishRoomCreate} />}
                    {(selectedRoom) && (!this.state.roomCreateVisible) &&
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
