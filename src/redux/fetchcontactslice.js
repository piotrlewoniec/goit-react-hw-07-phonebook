import { createSlice } from '@reduxjs/toolkit';
import { getContacts, createContact } from './operations';

const fetchContactsInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

const fetchContactsSlice = createSlice({
  name: 'fetchContacts',
  initialState: fetchContactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })

      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })

      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(createContact.pending, state => {
        state.isLoading = true;
      })

      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.data.push(action.payload);
      })

      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // [getContacts.pending](state) {
    //   state.isLoading = true;
    // },
    // [getContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.data = action.payload;
    // },
    // [getContacts.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const fetchReducer = fetchContactsSlice.reducer;
