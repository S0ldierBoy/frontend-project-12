import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getChannels, addChannel, removeChannel } from '../../api/channelsApi.js';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState({
  channels: [],
  loading: false,
  activeChannelId: null,
  activeChannelName: null,
  error: null,
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setActiveChannelId: (state, action) => {
      state.activeChannelId = action.payload;
    },
    setActiveChannelName: (state, action) => {
      state.activeChannelName = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getChannels.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getChannels.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.channels = action.payload;
      state.activeChannelId = action.payload[0]?.id ?? null;
      state.activeChannelName = action.payload[0]?.name ?? null;
    });
    builder.addCase(getChannels.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action?.error?.message;
    });

    builder.addCase(addChannel.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(addChannel.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.channels.push(action.payload);
      state.activeChannelId = action.payload.id;
      state.activeChannelName = action.payload.name;
    });

    builder.addCase(addChannel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action?.error?.message;
    });
    builder.addCase();
  },
});

export const setActiveChannel = (id) => (dispatch, getState) => {
  const channel = getState().channels.channels.find((ch) => ch.id === id);
  if (channel) {
    dispatch(setActiveChannelId(id));
    dispatch(setActiveChannelName(channel.name));
  }
};

export const { setActiveChannelId, setActiveChannelName } = channelsSlice.actions;
export default channelsSlice.reducer;
