import React from 'react';
import UserEntry from './user/user-entry.component'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            user: {
                id: undefined,
                alias: undefined
            }
        }
        this.setLocalUser = this.setLocalUser.bind(this);
    }

    setLocalUser(user) {
        this.setState({user: user});
    }

    render(){
       const user = this.state.user;
       return(
        <div>
            <div class="layout-container">
                <div class="main-header row">
                    <p>UserId: {user.id}</p>
                    <p>Logged In: {user.alias}</p>
                </div>
                <div class="main-body row">
                    <UserEntry 
                        setLocalUser={this.setLocalUser}
                    />
                </div>
            </div>
        </div>
       );
    }
}

export default Main;