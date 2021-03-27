import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVertOutlined, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu92m5Qbp84BFU_dzG-GJOD6zmsAd2xRiRQ1sae-=s64-c-mo"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlined/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text"  placeholder="Search or start new chat"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
