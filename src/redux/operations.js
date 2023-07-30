import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import {
  headerDefaultGet,
  headerDefaultPost,
  headerDeafultURL,
} from 'js/config/stdquery';

export const getContacts = createAsyncThunk(
  'fetchContacts/get',
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

export const createContact = createAsyncThunk(
  'fetchContacts/create',
  async (newContact, thunkAPI) => {
    try {
      const header = { ...headerDefaultPost, ...headerDeafultURL };
      header.url = '/contacts';
      header.body = JSON.stringify(newContact);
      const response = await axiosData(header);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
