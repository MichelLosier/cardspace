import React from 'react';

class RoomList extends React.Component {
    constructor(){
        super();

    }



    roomListing(rooms){
        const roomList = rooms.map((room) => {
            return (
                <li key={room.id}>
                    {room.name}
                </li>
            );
        });

        return roomList;
    }

    render(){
        const rooms = this.props.list;
        return(
            <div>
                <ul className="object-list">
                    {(!rooms.length === 0) ? (
                        this.roomListing(rooms)
                        ) : (
                        <p>No Rooms Available</p>
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default RoomList;