import React from 'react';

import UserList from '../user/user-list.component';

import RoomService from '../../services/room.service';

class Room extends React.Component {
    constructor(){
        super();
        this.state = {
            room: {
                alias: 'Room',
                users:[]
            }
        };
        this.Room$ = new RoomService();
    }

    componentDidMount(){
        this.getRoomInfo();
    }

    getRoomInfo(){
        this.Room$.getRoom(this.props.match.params.roomId, (room) => {
            console.log(`room name retrieved: ${room.alias}`);
            this.setState({
                room: room
            })
        });
    }

    render() {
        const Room = this.state.room;
        return(
            <div className="center-align width-12">
                <div className="header">
                    <h2>{Room.alias}</h2>
                </div>   
                <UserList
                    users={Room.users}
                    onUserSelect={(user)=>{return ''}}
                />
            </div>
        )
    }
}

export default Room;