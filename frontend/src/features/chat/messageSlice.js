import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { addMessage, getMessages } from '../../api/messagesApi.js';

const messagesAdapter = createEntityAdapter();

const initialState = messagesAdapter.getInitialState({
  loading: false,
  error: null,
});

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageReceived: (state, action) => {
      messagesAdapter.setOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    // addMessage
    builder
      .addCase(addMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        messagesAdapter.addOne(state, action.payload);
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      });
    // getMessages
    builder
      .addCase(getMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.loading = false;
        messagesAdapter.setAll(state, action.payload);
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      });
  },
});

export const {
  selectById: selectMessageById,
  selectAll: selectAllMessages,
  selectEntities: selectMessagesEntities,
} = messagesAdapter.getSelectors((state) => state.messages);

export const selectMessagesByChannel = (channelId) =>
  createSelector([selectAllMessages], (messages) =>
    messages.filter((msg) => msg.channelId === channelId)
  );

export const { messageReceived } = messageSlice.actions;
export default messageSlice.reducer;
