import React from 'react';

import RoomService from '../../services/room.service';

const Room$ = new RoomService();

class RoomCreate extends React.Component {
    constructor(){
        super();
        this.state = {
            roomName:"",
            roomSize: 4
        }

        this.nameChange = this.nameChange.bind(this)
        this.sizeChange = this.sizeChange.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const name = this.state.roomName;
        const size = this.state.roomSize;

        Room$.createRoom(name,size, (data) => {
            console.log(data);
        });
        this.closeForm(true);
    }

    closeForm(updateRooms) {

        this.setState({roomName: "", roomSize:4});
        this.props.onFinish(updateRooms);
    }
        

    nameChange(e){
        const name = e.target.value;
        this.setState({roomName: name});
       
    }

    sizeChange(e){
        const size = e.target.value;
        this.setState({roomSize: size});
       
    }

    render(){
        const roomName = this.state.roomName
       return(
            <div className="component-container width-6 border center-align popup">
                <div className="header">
                    <h2>Create a Room</h2>
                </div>
                <div>
                    <form id="room-create" onSubmit={this.handleSubmit}>
                        <label for="room">Room Name</label>
                        <input name="room" type="text" value={this.state.roomName} onChange={this.nameChange}></input>
                        <label for="size">Room Size</label>
                        <input name="size" type="text" value={this.state.roomSize} onChange={this.sizeChange}></input>
                        <input className="hover-border" type="submit" value="Create"></input>
                        <input className="hover-border" type="button" value="Cancel" onClick={this.closeForm}></input>
                    </form>
                </div>
            </div>
       );
    }
}

export default RoomCreate;