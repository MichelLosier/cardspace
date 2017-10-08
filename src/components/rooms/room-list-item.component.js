import React from 'react';

class RoomListItem extends React.Component {
    constructor(){
        super();
    
    this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e){
        e.preventDefault();
        this.props.onSelect(this.props.room);
    }

    render(){
        const room = this.props.room;
        return (
            <li
                className={(this.props.selected) ? 'selected' : ''}
                onClick={this.handleClick}
            >
                <div>{room.alias}</div>
                <div>{room.users.length} / {room.roomSize}</div>
            </li>
        )
    }
}
export default RoomListItem;