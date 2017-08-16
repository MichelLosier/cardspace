import React from 'react';

import UserService from '../../services/user.service';

const User$ = new UserService();

class UserEntry extends React.Component {
    constructor(){
        super();
        this.state = {
            form: {
                userName: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const name = this.state.form.userName;
        User$.createUser(name, (data) => {
            this.props.setLocalUser(data);
        });
        this.setState({form:{ userName: ""}});
    }
        

    handleChange(e){
        const name = e.target.value;
        this.setState({form: {userName: name}
        });
    }

    render(){
        const userName = this.state.form.userName
       return(
        <div className="component-container width-3 border center-align popup">
            <div>
                <h2> Create A User</h2>
            </div>
            <div>
                <form id="user-create" onSubmit={this.handleSubmit}>
                    <label for="user">User Name</label>
                    <input name="user" type="text" value={this.state.form.userName} onChange={this.handleChange}></input>
                    <input className="hover-border" type="submit" value="Create"></input>
                </form>
            </div>
        </div>
       );
    }
}

export default UserEntry;