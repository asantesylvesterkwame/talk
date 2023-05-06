import React from 'react'
import ChatSidebar from '../../components/chatSideBar/ChatSidebar'
import Chatsection from '../../components/Chats/Chatsection'

const Chatpage = () => {
  return (
    <div className='flex'>
        <div className="sideBarDiv">
            <ChatSidebar/>
        </div>
        <div className="chatsDiv">
            <Chatsection/>
        </div>
    </div>
  )
}

export default Chatpage