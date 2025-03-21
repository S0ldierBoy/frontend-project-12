import { createSlice } from '@reduxjs/toolkit';
import { getChannels } from '../../api/channelsApi.js';

const initialState = {
  channels: [],
  loading: false,
  activeChannelId: null,
  activeChannelName: null,
  error: null,
};

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
  },
});
export const { setActiveChannelId, setActiveChannelName } = channelsSlice.actions;
export default channelsSlice.reducer;
