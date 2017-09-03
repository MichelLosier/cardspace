import React from 'react';

class UserListItem extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }
    


    handleClick(){
        this.props.onSelect(this.props.user);
    }

    render(){
        const user = this.props.user;
        return(
            <li
                className={(this.props.selected) ? 'selected' : ''}
                onClick={this.handleClick}
            >
                <div>{user.alias}</div>
            </li>
        )
    }
}

export default UserListItem;