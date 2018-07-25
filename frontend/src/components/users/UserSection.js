import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

class UserSection extends Component {
  render() {
    return (
      <div className="support card">
        <div className="card-header bg-primary text-white">
          <strong>Users</strong>
        </div>
        <div className="card-body users">
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default UserSection;