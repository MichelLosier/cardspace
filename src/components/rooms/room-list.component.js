import React from 'react';

class RoomList extends React.Component {
    constructor(){
        super();

    }



    roomListing(rooms){
        const roomList = rooms.map((room) => {
            return (
                <li key={room.id}>
                    <div>{room.alias}</div>
                    <div>{room.users.length} / {room.roomSize}</div>
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
                    {(rooms.length != 0) ? (
                        this.roomListing(rooms)
                        ) : (
                        <div>
                            <p>No Rooms Available</p>
                        </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default RoomList;