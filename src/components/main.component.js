import React from 'react';
import { Route, Link }  from 'react-router-dom';

import RoomLobby from './rooms/room-lobby.component';
import UserService from '../services/user.service';
import UserEntry from './user/user-entry.component';
import Room from './rooms/room.component';

import '../main.css';

const User$ = new UserService();

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            userLoggedIn: true,
            user: {
                id: undefined,
                alias: undefined
            }
        }
        this.setLocalUser = this.setLocalUser.bind(this);
    }

    componentDidMount(){
        this.checkLocalUser();
    }

    checkLocalUser(){
        const id = window.localStorage.getItem('uid');
        if (id) {
            User$.getUser(id, (user) => {
                if (!user.id) {
                    console.log('user in local storage not found on server.. create new user');
                    this.setState({userLoggedIn: false});
                } else {
                    console.log('existing user found in local storage.. setting.')
                    this.setLocalUser(user);
                }
            });
        } else {
            this.setState({userLoggedIn: false});
        }
    }

    setLocalUser(user) {
        const id = window.localStorage.getItem('uid');
        if (id) {
            this.setState({
                userLoggedIn: true,
                user: user
            });
        }
    }

    //Views
    _UserEntry(props){
        return(
            <UserEntry
                setLocalUser={this.setLocalUser}
            />
        );
    }

    _RoomLobby(props){
        return(
            <RoomLobby
                {...props}
            />
        );
    }

    _Room(props){
        return(
            <Room
                {...props}
            />
        )
    }

    render(){
       const state = this.state;
       return(
        <div>
            <div>
                <div className="main-header layout-container">
                    <div>
                        <h1><a href="/">cardspace</a></h1>
                    </div>
                    <div>
                        <p>UserId: {state.user.id}</p>
                        <p>Logged In: {state.user.alias}</p>
                    </div>
                </div>
                <div className="main-body layout-container">
                    {!state.userLoggedIn &&
                        this._UserEntry()
                    }
                    <Route 
                       exact path="/" 
                        render={(props) => this._RoomLobby(props)}
                    />
                    <Route 
                        path="/room/:roomId"
                        render={(props) => this._Room(props)}
                    />
                </div>
            </div>
        </div>
       );
    }
}

export default Main;