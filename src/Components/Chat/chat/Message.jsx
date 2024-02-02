import React, { useState } from 'react'
import '../../css/Message.css'
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '@mui/icons-material';
import { deleteMessage } from '../../../redux/Slice/ChatsFile';
import DeletePopup from '../Menu/DeletePopup';
import { FormateDate } from '../../utils/commonUtils';

const Message = () => {
  const chatmessagedata = useSelector((state) => state.chatmessage.selectedUserDetails)
const [messageId,setMessageId] = useState(0)
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()




  const handleOpen = (messageid) => {
    setMessageId(messageid)
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };




  const handleDelete = () =>{
    dispatch(deleteMessage({ chatmessagedata, messageId }))
    setOpen(false);
  }



  return (
    <div>
      {
        chatmessagedata?.chatArray?.length > 0 && chatmessagedata.chatArray.map((i) =>
          i.sender == 'YOU' ?
            (

              <div className='message_wrapper' key={i.id}>
                <p className='message_text'>{i.message}</p>
                  <p className='message_timestamp'>{FormateDate(i?.timestamp)}</p>
              </div>
            )

            :
            (
              <div className='main_message_ownWrapper'>
                <Delete

                  onClick={() => handleOpen(i.id)}
                  style={{
                    width: '19px',
                    fontSize: '32px',
                    marginRight: '10px'

                  }} />
                <div className='message_ownWrapper' key={i.id}>
                  <p className='message_text'>{i.message}</p>
                  <p className='message_timestamp'>{FormateDate(i?.timestamp)}</p>
                </div>

              </div>

            )

        )}

      <DeletePopup open={open} handleClose={handleClosePopup} deleteData={handleDelete} item={'text'} />

    </div>
  )
}

export default Message