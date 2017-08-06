import React from 'react';
import { createUser } from '../services/user.service';

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            userId: "",
            form: {
                userName: "Test"
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const name = this.state.form.userName;
        createUser(name, (data) => {
            this.setState({userId: data._id});
        });
    }
        

    handleChange(e){
        const name = e.target.value;
        this.setState({form: {userName: name}
        });
    }

    render(){
        const userId = this.state.userId;
        const userName = this.state.form.userName
       return(
        <div>
            <div>
                <p>UserId: {userId}</p>
                <p>User name: {userName}</p>
            </div>
            <div>
                <form id="user-create" onSubmit={this.handleSubmit}>
                    <label for="user">User Name</label>
                    <input name="user" type="text" onChange={this.handleChange}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
       );
    }
}

export default Main;