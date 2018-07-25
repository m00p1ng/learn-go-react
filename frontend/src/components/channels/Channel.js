import React, { Component } from 'react'

class Channel extends Component {
  onClick(e) {
    e.preventDefault();
    const { setChannel, channel } = this.props;
    setChannel(channel);
  }

  render() {
    const {channel, activeChannel} = this.props;
    let active = "rounded-0 list-group-item list-group-item-action";
    if(channel === activeChannel) {
      active += ' list-group-item-light active text-white';
    }
    return (
      <a
        onClick={this.onClick.bind(this)}
        className={active}
        style={{border: "none", padding: "0 1em"}}>
        {channel.name}
      </a>
    );
  }
}

export default Channel;