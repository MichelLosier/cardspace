import React from 'react';
import { Route, Link }  from 'react-router-dom';

import UserService from '../services/user.service';
import UserEntry from './user/user-entry.component';
import '../main.css';

const User$ = new UserService();

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

    componentWillMount(){
        this.checkLocalUser();
    }

    checkLocalUser(){
        const id = window.localStorage.getItem('uid');
        if (id) {
            User$.getUser(id, (data) => {
                console.log(data[id]);
                this.setLocalUser(data[id]);
            });
        }
    }

    setLocalUser(user) {
        const id = window.localStorage.getItem('uid');
        if (id) {
            this.setState({user: user});
        }
    }

    //Views
    _UserEntry(props){
        return(<UserEntry
            setLocalUser={this.setLocalUser}
            {...props}
        />);
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
                    <Route 
                        path="/" 
                        render={(props) => this._UserEntry(props)}
                     />
                </div>
            </div>
        </div>
       );
    }
}

export default Main;