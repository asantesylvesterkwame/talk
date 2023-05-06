import React from 'react';
import sampleCreateChatIcon from "./chat (1).png"

const ChatBox = () => {
  return (
    <div className=' h-30 hover:bg-slate-500 transition focus:bg-slate-700 rounded-lg cursor-pointer flex p-2.5 gap-3 '>
        <div className="ChatImageDiv flex justify-center items-center">
            <img src={sampleCreateChatIcon} className='w-10' alt="" />
        </div>
        <div className="ChatInfoDiv px-3">
            <div className="ChatTitleDiv ">
                <h3 className='font-bold'>Test Chat</h3>
            </div>
            <div className="lastRecentChat">
                <p className='text-sm'>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default ChatBox