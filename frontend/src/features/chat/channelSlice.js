import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {
  getChannels,
  addChannel,
  removeChannel,
  editChannel,
} from '../../api/channelsApi.js';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState({
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
    channelReceived: (state, action) => {
      channelsAdapter.setOne(state, action.payload);
    },
    channelRemoved: (state, action) => {
      channelsAdapter.removeOne(state, action.payload.id);
    },
    channelRenamed: (state, action) => {
      channelsAdapter.updateOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    // getChannels
    builder
      .addCase(getChannels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChannels.fulfilled, (state, action) => {
        state.loading = false;
        channelsAdapter.setAll(state, action.payload);

        const firstChannel = action.payload[0];
        state.activeChannelId = firstChannel?.id ?? null;
        state.activeChannelName = firstChannel?.name ?? null;
      })
      .addCase(getChannels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      });
    // addChannel
    builder
      .addCase(addChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addChannel.fulfilled, (state, action) => {
        state.loading = false;

        channelsAdapter.addOne(state, action.payload);
        state.activeChannelId = action.payload.id;
        state.activeChannelName = action.payload.name;
      })
      .addCase(addChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      });
    // removeChannel
    builder
      .addCase(removeChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeChannel.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      });
    // editChannel
    builder
      .addCase(editChannel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editChannel.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(editChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action?.error?.message;
      });
  },
});

export const {
  selectById: selectChannelById,
  selectAll: selectAllChannels,
  selectEntities: selectChannelEntities,
} = channelsAdapter.getSelectors((state) => state.channels);

export const setActiveChannel = (id) => (dispatch, getState) => {
  const channel = selectChannelById(getState(), id);
  if (channel) {
    dispatch(setActiveChannelId(id));
    dispatch(setActiveChannelName(channel.name));
  }
};

export const {
  setActiveChannelId,
  setActiveChannelName,
  channelReceived,
  channelRemoved,
  channelRenamed,
} = channelsSlice.actions;
export default channelsSlice.reducer;
