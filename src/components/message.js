import React from 'react';
import './message-style.css';
import { Card, CardContent, Typography } from '@material-ui/core'

function Message({ messages }) {
    console.log(messages);
    return (
        <>
            {
                messages.map((data, i) =>
                    <Card key={i} className = "message__card">
                        <CardContent className = "message__cardcontent">
                            <Typography
                             variant="h5" gutterBottom
                            >
                                <p>{data.name} : {data.text}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        </>
    );
}
export default Message;