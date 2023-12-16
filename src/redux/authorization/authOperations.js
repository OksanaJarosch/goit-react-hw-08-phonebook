import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
}

export const registration = createAsyncThunk(
    "authorization/registration",
    async (credentials, thunkAPI) => {
        console.log(credentials);
        try {
            const response = await axios.post('/users/signup', credentials);
            console.log(response.data);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
