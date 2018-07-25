import React, { Component } from 'react';

class UserForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.userName;
    const userName = node.value;
    this.props.setUserName(userName);
    node.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group" style={{marginTop: "1.5em"}}>
          <input
            type="text"
            ref="userName"
            className="form-control"
            placeholder="Set Your Name..."
            />
        </div>
      </form>
    )
  }
}

export default UserForm;