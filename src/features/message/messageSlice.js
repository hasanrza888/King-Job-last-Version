
import { createSlice } from '@reduxjs/toolkit';
const messageSlice = createSlice({
    name: 'message',
    initialState: {
        currentChat:null,
    },
    reducers: {
        setCurrentchat:(state,{payload}) => {
            state.currentChat = payload;
        },
        clearCurrentchat:(state,{payload}) => {
            state.currentChat = null;
        },
        addMessage:(state,{payload}) => {
            if(state.currentChat && state.currentChat.messages){
                state.currentChat.messages = [...state.currentChat.messages,payload]
            }
        }
    },
  });
  export const { setCurrentchat,clearCurrentchat,addMessage } = messageSlice.actions;
export default messageSlice.reducer;