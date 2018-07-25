import React, { Component } from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

class ChannelSection extends Component {
  render() {
    return (
      <div className="support card">
        <div className="card-header bg-primary text-white">
          <strong>Channels</strong>
        </div>
        <div className="card-body channels">
          <ChannelList {...this.props} />
          <ChannelForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default ChannelSection;