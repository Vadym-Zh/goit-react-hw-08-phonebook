import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlicer/contactsSlice';
import { filtersReducer } from 'redux/filterSlicer/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
