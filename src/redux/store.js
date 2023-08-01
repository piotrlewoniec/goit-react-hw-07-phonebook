import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './searchfilterslice';
import { fetchReducer } from './fetchcontactslice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    server: fetchReducer,
  },
});

export default store;
