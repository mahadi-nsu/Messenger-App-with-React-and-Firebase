import React from 'react';
import './message-style.css';

function Message({ messages }) {
    return (
        <div className="message-top">
            {messages.map(message => <p>{message}</p>)}
        </div>
    )
}
export default Message;