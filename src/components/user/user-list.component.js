import React from 'react';
import UserListItem from './user-list-item.component';

class UserList extends React.Component {
    constructor(){
        super();

    }

    userListing(users){
        const userList = users.map((user) => {
            const selectedUser = this.props.selectedUser;
            const selected = (selectedUser) ? (user.id == this.props.selectedUser.id) : false;

            return(
                <UserListItem
                    key={user.id}
                    user={user}
                    selected={selected}
                    onSelect={this.props.onUserSelect}
                />
            );
        });

        return userList;
    }
    render(){
        const users = this.props.users;
        return(
            <div className="component-container border center-align">
                <div className="header">
                    <h3>Users</h3>
                </div>
                <div className="component-container">
                    <ul className="object-list">
                        {(users.length != 0) ? (
                            this.userListing(users)
                            ) : (
                            <div>
                                <p>No Users in the Room</p>
                            </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserList;