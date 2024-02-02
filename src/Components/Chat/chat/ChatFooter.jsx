import { EmojiEmotionsOutlined, Send } from '@mui/icons-material'
import { InputBase } from '@mui/material'
import React, { useState } from 'react'
import '../../css/chatFooter.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNewText } from '../../../redux/Slice/ChatsFile'


const ChatFooter = () => {
  const chatmessagedata = useSelector((state) => state.chatmessage.selectedUserDetails)

  const [inputValu, setInputValu] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (inputValu) {
      dispatch(addNewText(
        {

          // username:chatmessagedata?.username,
          id: chatmessagedata?.id,
          message: inputValu,
          timestamp:Date.now(),
          // id: 3,
          sender: "ME"
        }
      ))

      setInputValu('')
    } else {
      alert('Please send some message')
    }

  }


  const sendText = async (e) => {
    console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (inputValu) {
        dispatch(addNewText(
          {
  
            // username:chatmessagedata?.username,
            id: chatmessagedata?.id,
            message: inputValu,
            timestamp:Date.now(),
            // id: 3,
            sender: "ME"
          }
        ))
  
        setInputValu('')
      }
    }
  }


  return (
    <div className='chat_footer_container'>
      <EmojiEmotionsOutlined className='chat_footer_emoji_icon' />
      <div className='chat_footer_input_div'>
        <InputBase
          className='chat_footer_input_field'
          value={inputValu}
          onKeyPress={(e)=>sendText(e)}
          onChange={(e) => setInputValu(e.target.value)} />
      </div>
      <Send className='chat_footer_send_icon' onClick={() => handleSubmit()} />
    </div>
  )
}

export default ChatFooter