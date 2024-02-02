import React, { useState } from 'react'
import Menu from './Menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'
import '../css/chatDialogue.css'
import { useSelector } from 'react-redux'

const ChatDialogue = () => {

    const {selectedUserDetails}  = useSelector((state)=>state?.chatmessage)
    const [showEmpty, setShowEmpty] = useState(true)

    
    console.log(selectedUserDetails,"selectedUserDetails");
    // console.log(selectedUserDetails,"");


    return (
        <div className='chatDilogue'>
            <div className="chatComp">
                <div className='leftComponent'>
                    <Menu />
                </div>
                <div className='rightComponent'>

                    {Object.keys(selectedUserDetails).length ?
                        <ChatBox />
                        :
                        <EmptyChat />

                    }

                </div>
            </div>


        </div>
    )
}

export default ChatDialogue