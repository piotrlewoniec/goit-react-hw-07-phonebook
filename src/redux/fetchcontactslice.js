import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './operations';

const fetchContactsInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

const fetchContactsSlice = createSlice({
  name: 'fetchContacts',
  initialState: fetchContactsInitialState,
  extraReducers: {
    [getContacts.pending](state) {
      state.isLoading = true;
    },
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const fetchReducer = fetchContactsSlice.reducer;
