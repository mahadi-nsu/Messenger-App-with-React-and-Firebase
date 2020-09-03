import React from 'react';
import './message-style.css';

function Message({ messages }) {
    console.log(messages);
    return (
        <>
            {
                messages.map((data, i) =>
                    <div key = {i}>
                        <h2>{data.name} : {data.text}</h2>
                    </div>

                )
            }
        </>
    );
}
export default Message;