import React from 'react';
import './message-style.css';
import { Card, CardContent, Typography } from '@material-ui/core'

function Message({ message, host }) {
    const hostUser = message.name == host;
    console.log(hostUser);
    console.log(message);
    return (
        <div>
            {message.name} - {message.text}
        </div>
    )
}
export default Message;