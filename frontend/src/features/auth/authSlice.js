import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserById = createAsyncThunk(
    'auth/loginUser'
)