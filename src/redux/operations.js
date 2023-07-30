import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import {
  headerDefaultGet,
  headerDefaultPost,
  headerDeafultURL,
} from 'js/config/stdquery';

import axios from 'axios';

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
      // header.data = JSON.stringify(newContact);
      const data = newContact;
      // const response = await axiosData(header, params);
      const response = await axios(header, data);
      // fetch('https://64c560bfc853c26efadac8fe.mockapi.io/api/pml/v1/contacts', {
      //   method: 'POST',
      //   headers: { 'content-type': 'application/json' },
      //   // Send your data in the request body as JSON
      //   body: JSON.stringify(newContact),
      // });

      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
