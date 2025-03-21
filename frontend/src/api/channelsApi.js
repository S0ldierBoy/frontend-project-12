import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getChannels = createAsyncThunk('chat/getChannels', async());
