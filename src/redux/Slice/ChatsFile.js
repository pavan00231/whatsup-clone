import { createSlice } from '@reduxjs/toolkit'
import userImage from '../../Components/images/bitmoji.png'

export const chatMessageSlice = createSlice({
  name: 'chatmessage',
  
  initialState: {
    value: 0,
    chatArray: [{
      message: "Hi",
      id: 1,
      sender: "YOU"
    },
    {
      message: "Hi",
      id: 2,
      sender: "ME"
    }

    ],
    filterDetails:[],
    usersDetails: [
      {
        username: "Rohith",
        id: 1,
        image: userImage,
        chatArray: [{
          message: "Hi ",
          id: 1,
          timestamp: Date.now(),
          sender: "YOU"
        },
        {
          message: "Hello Rohith",
          id: 2,
          timestamp: Date.now(),
          sender: "ME"
        }

        ],
      },
      {
        username: "Naveen",
        id: 2,
        image: userImage,
        chatArray: [{
          message: "Hi",
          id: 1,
          sender: "YOU",
          timestamp: Date.now(),
        },
        {
          message: "Hello Naveen",
          id: 2,
          timestamp: Date.now(),
          sender: "ME"
        }

        ],
      },
      {
        username: "Kumar",
        id: 3,
        image: userImage,
        chatArray: [{
          message: "Hi Pavan",
          id: 1,
          timestamp: Date.now(),
          sender: "YOU"
        },
        {
          message: "Hello Kumar",
          id: 2,
          timestamp: Date.now(),
          sender: "ME"
        }

        ],
      },
      {
        username: "Shyam",
        id: 4,
        image: userImage,
        chatArray: [{
          message: "Hi",
          id: 1,
          timestamp: Date.now(),
          sender: "YOU"
        },
        {
          message: "Hello Shyam",
          id: 2,
          timestamp: Date.now(),
          sender: "ME"
        }

        ],
      },
    ],
    selectedUserDetails: {}


  },
  reducers: {
    addNewText: (state, action) => {
      console.log(action.payload, "ss");

      // id: chatmessagedata?.id,
      // message: inputValu,
      // // id: 3,
      // sender: "ME"
      const sixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
      const foundUser = state.usersDetails.map((user) => {
        if (user.id === action.payload.id) {
          user.chatArray.push({
            message: action.payload.message,
            id: user.chatArray.length + 1,
            timestamp: action.payload.timestamp,
            sender: "ME"
          },
            {
              message: `Your Message has been received, Message id - ${sixDigitNumber}`,
              id: user.chatArray.length + 1,
              timestamp: action.payload.timestamp,
              sender: "YOU"
            },
          )
        }
        return user
      });

      state.selectedUserDetails = foundUser.find((user) => user.id == action.payload.id);
      console.log(foundUser, "ss");
      state.usersDetails = [...state.usersDetails];

    },

    getUserData: (state, action) => {

      state.selectedUserDetails = action.payload;
    },

    deleteUser: (state, action) => {
      const foundUser = state.usersDetails.filter((user) => user.id !== action.payload.id);


      state.usersDetails = foundUser;
      if (state.selectedUserDetails.id = action.payload.id) {
        state.selectedUserDetails = {}
      }




    },

    deleteMessage: (state, action) => {



      const newArray = state.usersDetails.map(item => {
        if (item.id === action.payload.chatmessagedata.id) {
          // If the current item has the specified id, remove the item from chartArray
          item.chatArray = item.chatArray.filter(chartItem => chartItem.id !== action.payload.messageId);
        }
        return item;
      });


      state.usersDetails = newArray;

      if (state.selectedUserDetails.id = action.payload.chatmessagedata.id) {

        state.selectedUserDetails = newArray.find((user) => user.id == action.payload.chatmessagedata.id);
      }
    },


    addNewUser: (state, action) => {

      const newUser = {
        username: action.payload,
        id: state.usersDetails.length + 1,
        image: userImage,
        chatArray: [],
      };



      state.usersDetails = [...state.usersDetails, newUser]



  
    },


    searchUser: (state, action) => {

      if (action.payload) {
        const newdata = state.usersDetails
        const filteredData = newdata?.filter((user) => user?.username?.toLowerCase()?.includes(action.payload?.toLowerCase())  )

        console.log(filteredData,"filteredData");
        state.filterDetails = filteredData
        // state.usersDetails = filteredData
      } else {
        state.filterDetails = []
        state.usersDetails = state.usersDetails
      }

    },


    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewUser, searchUser, deleteMessage, deleteUser, getUserData, addNewText, decrement, incrementByAmount } = chatMessageSlice.actions

export default chatMessageSlice.reducer