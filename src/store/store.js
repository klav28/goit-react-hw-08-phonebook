import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phonebookReducer,
    filter: filterReducer,
  },
});
