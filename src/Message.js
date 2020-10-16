import React from 'react'
import "./Message.css"
import {Avatar} from "@material-ui/core"

function Message({ message, sender, timestamp,}) {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                
                <p>{message}</p>
                <p>{sender}</p>
                <p><span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></p>
            </div>
            
        </div>
    )
}

export default Message
