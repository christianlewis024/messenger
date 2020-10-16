import React, {useState, useEffect} from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from "./SidebarOption"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ExpandLessIcon  from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon  from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import {db} from "./firebase"
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue();

    useEffect(() => {
        // run this code ONCE when the sidebar component loads
        db.collection('chats').where('users', 'array-contains', user.email).onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>{user.email}'s Chats</h2>                
                </div>                             
            </div>            
            <SidebarOption  Icon={FileCopyIcon} title="Notifications"/>
            <SidebarOption  Icon={ExpandLessIcon} title="More"/>
            <hr/>
            <SidebarOption  Icon={ExpandMoreIcon} title="Less"/>
            <hr/>
            <SidebarOption  Icon={AddIcon} addChannelOption title="New Conversation"/>
            
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}

    
        </div>
    )
}

export default Sidebar
