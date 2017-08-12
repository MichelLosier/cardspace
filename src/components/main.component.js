import React from 'react';
import UserEntry from './user/user-entry'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            user: {
                uid: undefined,
                alias: undefined
            }
        }
    }

    render(){
       return(
        <div>
            <div>
            </div>
            <UserEntry />
        </div>
       );
    }
}

export default Main;