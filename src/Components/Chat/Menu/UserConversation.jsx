import React, { useState } from 'react'
import '../../css/conversationTab.css'
import { useDispatch } from 'react-redux'
import { deleteUser, getUserData } from '../../../redux/Slice/ChatsFile'
import { Delete } from '@mui/icons-material'
import DeletePopup from './DeletePopup'

const UserConversation = ({ user }) => {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };



  const handleClick = () => {
    dispatch(getUserData(user))
  }



  const deleteData = () =>{
    dispatch(deleteUser(user))
    setOpen(false);
  }

  console.log(user,"user");

  return (
    <div className='conversation_component_parent'>
      <div className='user_Convo_component' onClick={() => handleClick()}>
        <div className='user_Convo_comp_width_1'>
          <img src={user?.image} alt="" className='user_Convo_image' />
        </div>
        <div className='user_Convo_comp_width_2'>
          <div className='user_Convo_container'>
            <h5 className='user_Convo_username'>{user.username}</h5>
            {/* <p className='user_Convo_timestamp'>TimeStamp</p> */}
          </div>

        </div>
      </div>
      <div className='user_Convo_component_2'  onClick={() => handleOpen()}>
        <Delete />
        {/* <p className='user_Convo_text'>Text</p> */}

      </div>
      <DeletePopup open={open} handleClose={handleClosePopup} deleteData={deleteData}  item={'user chat'}  />
    </div>

  )
}

export default UserConversation