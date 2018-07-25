import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class MessageSection extends Component{
  render(){
    let {activeChannel} = this.props;
    return (
      <div className='messages-container card'>
        <div className='card-header  bg-dark text-white'>
          <strong>{activeChannel.name || 'Select A Channel'}</strong>
        </div>
        <div className='card-body messages'>
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    )
  }
}

export default MessageSection