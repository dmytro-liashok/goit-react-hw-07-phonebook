import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from './operations';
import { selectorFilter } from './filterSlice';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  contacts: [],

  filteredContact: 0,
};

const contacts = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [requestContacts.pending]: handlePending,
    [requestContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [requestContacts.rejected]: handleRejected,
    // DELETE
    [requestDeleteContact.pending]: handlePending,
    [requestDeleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [requestDeleteContact.rejected]: handleRejected,
    // ADD
    [requestAddContact.pending]: handlePending,
    [requestAddContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = [action.payload, ...state.contacts];
    },
    [requestAddContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contacts.reducer;

// export const select

export const selectorContacts = state => state.contacts.contacts;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;
export const selectorFilteredContacts = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
