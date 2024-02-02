import React from 'react'
import ChatFooter from './ChatFooter'
import Message from './Message'
import '../../css/chatMessage.css'

const ChatMessages = () => {
  return (
    <div className='chat_messages_wrapper'>
        <div className='chat_messages_component'>
            <div className='chat_messages_container'>
                <Message />
            </div>
        </div>
        <ChatFooter />
    </div>
  )
}

export default ChatMessages