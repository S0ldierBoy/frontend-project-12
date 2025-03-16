import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import {retry} from "@reduxjs/toolkit/query";

const loginUser = async ({name, pass}) => {
    try {
        const response = await axios.post('/api/v1/signup', {
            username: name, password: pass,
        })
        const {token} = response.data
        localStorage.setItem("token", token);
        return response.data;
    } catch (error) {
        console.log('ошибка авторизации', error);
        throw error
    }
}

export default loginUser


export const registerUser = createAsyncThunk(
    'auth/register',
    async ({name, password}, thunkAPI) => {
        try {
            const response = await axios.post('/api/v1/signup', {
                username: name,
                password: password,
            })
            const {token} = response.data
            localStorage.setItem('token', token);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data || 'network error');
        }
    })

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({name, password}, thunkAPI) => {
        try {
            const response = await axios.post('/api/v1/login', {
                username: name,
                password: password
            })
            const {token} = response.data
            localStorage.setItem('token', token);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data || 'network error');
        }
    })