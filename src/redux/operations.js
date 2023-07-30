import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import { headerDefaultGet, headerDeafultURL } from 'js/config/stdquery';

export const getContacts = createAsyncThunk(
  'fetchContacts/request',
  async (_, thunkAPI) => {
    try {
      const header = { ...headerDefaultGet, ...headerDeafultURL };
      header.url = '/contacts';
      const response = await axiosData(header);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
