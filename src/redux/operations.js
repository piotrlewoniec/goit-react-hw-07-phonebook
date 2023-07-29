import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosData } from 'js/apireset/axios-data';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const getContacts = createAsyncThunk(
  'fetchContacts/request',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
