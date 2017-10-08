import React from 'react';
import {Route, Link} from 'react-router-dom';

import UserList from '../user/user-list.component';

import RoomService from '../../services/room.service';

class RoomDetail extends React.Component {
    constructor(){
        super();
        this.Room$ = new RoomService();
        this.handleJoinRoom = this.handleJoinRoom.bind(this);
    }

    handleJoinRoom(){
        this.props.onJoinRoom(this.props.room);

    }

    render(){
        const room = this.props.room;
        return(
            <div className="component-container border center-align width-6">
                <div className="header">
                    <h3>{room.alias}</h3>
                </div>
                <p>Owner: {room.owner}</p>
                <p>Users: {room.users.length} / {room.roomSize}</p>
                <UserList
                    users={room.users}
                    onUserSelect={(user)=>{return ''}}
                />
                <div>
                    <Link 
                        className="button hover-border"
                        onClick={this.handleJoinRoom}
                        to={`/room/${room.id}`}>Join Room</Link>
                </div>
            </div>
        )
    }
}
export default RoomDetail;