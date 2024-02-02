import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import '../../css/chatFooter.css'
import { useSelector } from 'react-redux'

const ChatBox = () => {

  return (
    <div className="width_height_chatbox">
        <ChatHeader />
        <ChatMessages  />
    </div>
  )
}

export default ChatBox