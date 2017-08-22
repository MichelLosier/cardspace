import React from 'react';
import RoomListItem from './room-list-item.component';

class RoomList extends React.Component {
    constructor(){
        super();
        this.showRoomCreate = this.showRoomCreate.bind(this);
    }

    roomListing(rooms){
        const roomList = rooms.map((room) => {
            const selectedRoom = this.props.selectedRoom;
            const selected = (selectedRoom) ? (room.id == this.props.selectedRoom.id) : false;
 
            return (

                <RoomListItem 
                    key={room.id}
                    room={room}
                    selected={selected}
                    onSelect={this.props.onRoomSelect}
                />
            );
        });

        return roomList;
    }

    showRoomCreate(){
        this.props.onShowRoomCreate();
    }

    render(){
        const rooms = this.props.list;
        return(
            <div className="component-container border center-align">
                <div className="header">
                    <h3>Rooms</h3>
                </div>
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
                <button className="button hover-border" onClick={this.showRoomCreate}>Create Room</button>
            </div>
        );
    }
}
export default RoomList;