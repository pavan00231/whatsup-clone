import { Chat, MoreVert } from '@mui/icons-material'
import React from 'react'
import user_Convo_image from '../../images/bitmoji.png'
import '../../css/headerComp.css'


const MenuHeader = () => {
    return (
        <div className='headerComp'>
            <img src={user_Convo_image} className='chat_header_img'  />
            <div className='chatHeader_wrapper'>
                <Chat />
                <MoreVert />
            </div>
        </div>
    )
}

export default MenuHeader