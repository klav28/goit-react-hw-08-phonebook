import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = 'Bearer ${token}';
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  console.log(credentials);
  try {
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Post Error: ', error);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  console.log(credentials);
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Post Error: ', error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
  console.log(credentials);
  try {
    await axios.post('users/logout', credentials);
    token.unset();
  } catch (error) {
    console.log('Post Error: ', error);
  }
});
