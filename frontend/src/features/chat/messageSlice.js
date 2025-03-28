import { createSlice } from '@reduxjs/toolkit';
import { addMessage } from '../../api/messagesApi.js';

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageReceived: (state, action) => {
      const newMessage = action.payload;
      if (!state.messages.some((msg) => msg.id === newMessage.id)) {
        state.messages.push(newMessage);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addMessage.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action?.error?.message;
    });
  },
});
export const { messageReceived } = messageSlice.actions;
export default messageSlice.reducer;
