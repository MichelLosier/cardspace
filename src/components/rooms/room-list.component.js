import React from 'react';

import { getRooms } from '../../services/room.service';

class RoomList extends React.Component {
    constructor(){
        super();

    }

    roomListing(rooms){
        const roomList = rooms.map((room) => {
            return (
                <li
                    key={room.id}
                >
                    {room.name}
                </li>
            )
        });

        return roomList;
    }

    render(){
        const rooms = this.props.rooms;
        return(
            <div>
                <ul>
                    {this.roomListing(rooms)}
                </ul>
            </div>
        );
    }
}