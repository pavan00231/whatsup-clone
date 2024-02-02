import { Search } from '@mui/icons-material'
import { InputBase } from '@mui/material'
import React from 'react'
import '../../css/searchComponent.css'
import { searchUser } from '../../../redux/Slice/ChatsFile'
import { useDispatch } from 'react-redux'


const SearchComp = () => {

  const dispatch = useDispatch()
  const handleChange =(e) =>{
    dispatch(searchUser(e))
  }

  return (
    <div className='search_component'>
        <div  className='search_wrapper'>
                <div className='search_icon'>

                    <Search
                        fontSize='small'
                    />

                </div>
                <InputBase className='search_input_base'
                onChange={(e)=>handleChange(e.target.value)}
                placeholder='Search or start new chat' />
            </div>
    </div>
  )
}

export default SearchComp