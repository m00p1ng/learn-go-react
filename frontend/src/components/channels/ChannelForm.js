import React, { Component } from 'react';

class ChannelForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);
    node.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group" style={{marginTop: "1.5em"}}>
          <input
            type="text"
            ref="channel"
            className="form-control"
            placeholder="Add Channel"
            />
        </div>
      </form>
    )
  }
}

export default ChannelForm;