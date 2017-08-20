import React from 'react';
import {Route, Link} from 'react-router-dom';

class RoomDetail extends React.Component {
    constructor(){
        super();
    }

    userList(users){
        users.map((user) => {
            //TODO USER LIST COMPONENT
            return(
                <li>{user}</li>
            )
        });
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
                    <div className="component-container">
                        <ul className="object-list">
                            {(room.users.length != 0) ? (
                                this.userList(room.users)
                                ) : (
                                <div>
                                    <p>No Users In the Room</p>
                                </div>
                                )
                            }
                        </ul>
                    </div>
                <div>
                    <Link className="button hover-border" to={`/room/${room.id}`}>Join Room</Link>
                </div>
            </div>
        )
    }
}
export default RoomDetail;