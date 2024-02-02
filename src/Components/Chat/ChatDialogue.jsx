import React, { useState } from 'react'
import Menu from './Menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'
import '../css/chatDialogue.css'

const ChatDialogue = () => {

    const [showEmpty, setShowEmpty] = useState(true)
    return (
        <div className='chatDilogue'>
            <div className="chatComp">
                <div className='leftComponent'>
                    <Menu />
                </div>
                <div className='rightComponent'>

                    {showEmpty ?
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