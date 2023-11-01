import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { requestLogin, requestRegister } from 'services/phoneBookApi';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder => builder,
  //       // ========================== FETCH CONTACTS =====================
  //       .addCase(fetchContacts.fulfilled, (state, action) => {
  //         state.contacts.isLoading = false;
  //         state.contacts.items = action.payload;
  //       })
  //       // ================= ADD CONTACT ====================
  //       .addCase(addContact.fulfilled, (state, action) => {
  //         state.contacts.isLoading = false;
  //         state.contacts.items.push(action.payload);
  //       })
  //       // ======================= DELETE CONTACT =========================
  //       .addCase(deleteContact.fulfilled, (state, action) => {
  //         state.contacts.isLoading = false;

  //         state.contacts.items = state.contacts.items.filter(
  //           contact => contact.id !== action.payload.id
  //         );
  //       })
  //       .addMatcher(
  //         isAnyOf(
  //           deleteContact.pending,
  //           fetchContacts.pending,
  //           addContact.pending
  //         ),
  //         state => {
  //           state.contacts.isLoading = true;
  //           state.contacts.error = null;
  //         }
  //       )
  //       .addMatcher(
  //         isAnyOf(
  //           deleteContact.rejected,
  //           fetchContacts.rejected,
  //           addContact.rejected
  //         ),
  //         (state, action) => {
  //           state.contacts.isLoading = false;
  //           state.contacts.error = action.payload;
  //         }
  //       ),
});

export const contactsReducer = contactsSlice.reducer;
