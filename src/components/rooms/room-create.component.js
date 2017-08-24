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

        this.handleChange = this.handleChange.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const name = this.state.roomName;
        const size = this.state.roomSize;

        Room$.createRoom(name,size, (data) => {
            this.closeForm(data);
        });
        
    }

    closeForm(updateRooms) {

        this.setState({roomName: "", roomSize:4});
        this.props.onFinish(updateRooms);
    }
        

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
          });
    }

    render(){
        const roomName = this.state.roomName
        const roomSize = this.state.roomSize
       return(
        <div className="component-container border center-align width-6">
                <div className="header">
                    <h2>Create a Room</h2>
                </div>
                <div>
                    <form id="room-create" onSubmit={this.handleSubmit}>
                        <label for="roomName">Room Name</label>
                        <input name="roomName" type="text" value={roomName} onChange={this.handleChange}></input>
                        <label for="roomSize">Room Size</label>

                        <input name="roomSize" type="text" value={roomSize} onChange={this.handleChange}></input>
                        <input className="button hover-border inline-form-button" type="submit" value="Create"></input>
                        <a href="javascript:;" className="button hover-border inline-form-button" type="button" onClick={this.closeForm}>Cancel</a>
                    </form>

                </div>
            </div>
       );
    }
}

export default RoomCreate;