import React from 'react'
import UserConversation from './UserConversation'
import '../../css/conversationTab.css'
import { useSelector } from 'react-redux'

const ConversationTab = () => {

  const { usersDetails,filterDetails } = useSelector((state) => state.chatmessage)
  

  console.log(usersDetails, "usersDetails");
  return (
    <div className='conversation_component'>
      {
        filterDetails.length > 0 ? 
        filterDetails.length > 0 && filterDetails.map((user) => (
          <>
            <UserConversation user={user} />
            <div className='div_margin'></div>
          </>
        ))
        :
        
        usersDetails.length > 0 && usersDetails.map((user) => (
          <>
            <UserConversation user={user} />
            <div className='div_margin'></div>
          </>
        )

        )
      }

    </div>
  )
}

export default ConversationTab