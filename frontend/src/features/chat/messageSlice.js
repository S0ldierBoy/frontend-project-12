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

  extraReducers: (builder) => {
    builder.addCase(addMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.messages.push(action.payload);
    });
    builder.addCase(addMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action?.error?.message;
    });
  },
});

export default messageSlice.reducer;
