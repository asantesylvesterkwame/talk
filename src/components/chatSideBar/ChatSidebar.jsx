import React from 'react'
import menuButton from "./menu.png";
import addChatButtonIcon from "./plus.png";
import { Auth, Provider } from '../../firebase-config';
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from '../ChatBox/ChatBox';

const ChatSidebar = () => {
    const [user] = useAuthState(Auth);
  return (
    <div className='border  h-screen text-white bg-slate-900 p-1 text-2xl'>
        <div className="FulltopMenu p-5">
            <div className="ProfilepicandTitleSide flex gap-10">
        <div className="TopChatProfileSec flex gap-2.5 ">
            <div className="ProfilePic">
                <img src={user.photoURL} className='rounded-full w-10' alt="" />
            </div>
            <div className="PageTitleDiv flex justify-center items-center">
                <h1 className='flex justify-center items-center'>Chats</h1>
            </div>
        </div>

            <div className="menuSideDiv flex gap-5">
                <div className="profileActionsMenuButtonDiv flex justify-center items-center">
                    {/* <h1 className='flex justify-center items-center w-10 h-10 border rounded-full'>...</h1> */}
                    <img src={menuButton} alt="MenuButton" className='w-10' />
            </div>
                <div className="AddNewChatDiv">
                {/* <h1 className='bg-gray border rounded-full w-10 h-10 flex justify-center items-center'>+</h1> */}
                <img src={addChatButtonIcon} alt="add chat button" className='w-10' />
            </div>
                <div className="darkModeDiv">

            </div>
            </div>
            
        </div>
        </div>

        <div className="searchBarDiv px-2 flex justify-center items-center  ">
            <input type="search" name="SearchChat" id="" placeholder='Search' className='bg-gray-600 rounded-xl w-15  px-5 placeholder:font-light placeholder:text-lg font-light text-lg outline-none' />
        </div>
        <br />
        {/* <hr className='text-white'/> */}
        <ChatBox/>
    </div>
  )
}

export default ChatSidebar