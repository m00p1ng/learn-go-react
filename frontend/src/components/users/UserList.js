import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    return (
      <div className="list-group borderless" >{
        this.props.users.map(user => {
          return (
            <User
                key={user.id}
                user={user}
            />
          )
        })
      }</div>
    )
  }
}

export default UserList;
