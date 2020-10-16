import React from 'react'
import "./SidebarOption.css"
import { useHistory } from "react-router-dom"
import {db} from './firebase';
import { useStateValue } from './StateProvider'

function SidebarOption({Icon, title, id,  addChannelOption}) {
    const history = useHistory();
    const [{user}] = useStateValue();
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push('title')
        }
    };

    const addChannel = () => {
        const channelName = prompt('Enter the email of the person you wish to message')
        const chatName = prompt('Enter the chat nickname')

        if ( channelName) {
            db.collection('chats').add({
                
                name: chatName,
                users: [channelName, user.email]

            })
        }
    }
    return (
        <div className="sidebarOption" onClick={addChannelOption ?  addChannel : selectChannel }>
           {Icon && <Icon className="sidebarOption__icon"/>}
           {Icon ? (
               <h3>{title}</h3>
           ) : (
               <h3 className="sidebarOption__channel">
                  <span className="sidebarOption__hash"> # {title}</span>
               </h3>
           )}
        </div>
    )
}

export default SidebarOption
