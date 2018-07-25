import React, { Component } from 'react';
import Channel from './Channel';

class ChannelList extends Component {
  render() {
    return (
      <div className="list-group borderless" >{
        this.props.channels.map(chan => {
          return (<Channel
              channel={chan}
              key={chan.id}
              {...this.props}
            />
          )
        })
      }</div>
    )
  }
}

export default ChannelList;
