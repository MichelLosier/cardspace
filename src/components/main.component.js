import React from 'react';
import UserEntry from './user/user-entry.component'
import '../main.css';

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
            <div className="layout-container">
                <div className="main-header row">
                    <div>
                        <h1>cardspace</h1>
                    </div>
                    <div>
                        <p>UserId: {user.id}</p>
                        <p>Logged In: {user.alias}</p>
                    </div>
                </div>
                <div className="main-body row">
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