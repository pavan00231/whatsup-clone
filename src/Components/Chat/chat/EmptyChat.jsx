import { Lock } from '@mui/icons-material'
import { Typography } from '@mui/material'
import '../../css/emptyChat.css'
import React from 'react'

const EmptyChat = () => {
    return (
        <div className='empty_div_component'>
            <div className='empty_div_containcer'>
                <img src={"emptyChatImage"} alt="Image"  className='empty_div_image' />
                <h4  className='empty_div_Title'>WhatsApp Web</h4>
                <h5  className='empty_div_subtitle'>Send and receive messages without keeping your phone online.<br /> Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</h5>
                <div  className='empty_div_styled_divider' />

                <div  className='empty_div_subTitle_icon'><Lock /> <h5  className='empty_div_subtitle'> Your personal messages are end-to-end encrypted</h5></div>
            </div>
        </div>
    )
}

export default EmptyChat