import React from 'react';

import RoomService from '../../services/room.service';

const Room$ = new RoomService();

class Room extends React.Component {
    constructor(){
        super();
        this.state = {
            room: {}
        };
    }

    render() {
        return(
            <div className="center-align width-12">
                <div className="header">
                    <h2>Room</h2>
                </div>   
            </div>
        )
    }
}

export default Room;