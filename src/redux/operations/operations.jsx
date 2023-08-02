import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64c947e2b2980cec85c21c03.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, API) => {
    try {
      const response = await axios.get('/contacts');

      // console.log(response.data);
      return response.data;
    } catch (e) {
      return API.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, API) => {
    try {
      const { name, phone } = contact;
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (e) {
      return API.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, API) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return API.rejectWithValue(e.message);
    }
  }
);
