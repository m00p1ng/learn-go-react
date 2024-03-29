import React, {Component} from 'react';
import fecha from 'fecha';

class Message extends Component{
  render(){
    let {message} = this.props;
    let createdAt = fecha.format(new Date(message.createdAt), 'HH:mm:ss MM/DD/YY');
    // let createdAt = 'HH:mm:ss MM/DD/YY';
    return (
      <li className='message'>
        <div className='author'>
          <strong>{message.author}</strong> 
          <i className='timestamp'>{createdAt}</i>
        </div>
        <div className='body'>{message.body}</div>
      </li>
    )
  }
}

export default Message