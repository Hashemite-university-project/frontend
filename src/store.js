// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
});

export default store;
