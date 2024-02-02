import React, { useState } from 'react'
import MenuHeader from './MenuHeader'
import SearchComp from './SearchComp'
import ConversationTab from './ConversationTab'
import { Add, PlusOne, PlusOneRounded } from '@mui/icons-material'
import '../../css/menu.css'
import AddNewUser from './AddNewUser'
import { addNewUser } from '../../../redux/Slice/ChatsFile'
import { useDispatch } from 'react-redux'

const Menu = () => {
  
  const [userName, setUserName] = useState('')
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const createUser = () =>{
    if(userName){
      console.log(userName,"userName");
      dispatch(addNewUser(userName))
      setUserName('')
      handleClose()
    }else{
      alert('Please Enter a valid name')
    }


  }


  return (
    <div>
      <MenuHeader />
      <SearchComp />
      <ConversationTab />
      <div className='add_button_div' onClick={() => handleOpen()}>
        <Add className='27px' />
      </div>
      <AddNewUser
        userName={userName}
        setUserName={setUserName}
        createUser={createUser}

        open={open}
        handleClose={handleClose} />
    </div>
  )
}

export default Menu