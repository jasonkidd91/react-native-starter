import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import { HomeState } from '../../types/home';

// Define async thunk for fetching contacts from API
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await api.get('/api/contacts');
    const data = response.data;
    return data.contacts;
  },
);

// Define initial state
const initialState: HomeState = {
  contacts: [],
  status: 'idle',
  error: null,
};

// Define contacts slice
export const homeSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const {} = homeSlice.actions;
export default homeSlice.reducer;
