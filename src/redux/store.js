import { configureStore } from '@reduxjs/toolkit';
import { ContactSlice } from 'redux/ContactSlice';
import { Filter } from 'redux/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactSlice.reducer,
    filter: Filter.reducer,
  },
});
