import { configureStore } from '@reduxjs/toolkit'
import chatMessageReducer from './Slice/ChatsFile.js'

export default configureStore({
  reducer: {
    chatmessage:chatMessageReducer
  },
})