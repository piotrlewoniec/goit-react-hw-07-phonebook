import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosData } from 'js/apireset/axios-data';

axios.defaults.baseURL =
  'https://64c560bfc853c26efadac8fe.mockapi.io/api/pml/v1/';

export const getContacts = createAsyncThunk(
  'fetchContacts/request',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
