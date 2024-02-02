import { MoreVert, Search } from '@mui/icons-material'
import React from 'react'
import chat_header_image from '../../images/bitmoji.png'
import '../../css/chatHeader.css'

const ChatHeader = () => {
  return (
    <div className='chat_header_component'>
        <img src={chat_header_image} className='chat_header_image' />
        <div className='chat_header_div_username'>
            <h4 className='chat_header_username'>UserName</h4>
            <p className='chat_header_status'>status</p>
        </div>
        <div className='chat_header_right_component'>
            <Search  />
            <MoreVert />
        </div>
    </div>
  )
}

export default ChatHeader