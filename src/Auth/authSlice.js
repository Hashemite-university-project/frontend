// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

// Define the initial state
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  role: null,
  loading: false,
  error: null,
};

// Async thunk for Sign In
export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ user_email, password, role }, { rejectWithValue }) => {
    let apiUrl = '';
    if (role === 'Admin') {
      apiUrl = 'http://localhost:8080/user/admin/signIn';
    } else if (role === 'Instructor') {
      apiUrl = 'http://localhost:8080/user/instructor/signIn';
    } else if (role === 'Student') {
      apiUrl = 'http://localhost:8080/user/student/signIn';
    }

    try {
      const response = await axios.post(
        apiUrl,
        { user_email, password },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response?.data || 'Sign In Failed');
    }
  }
);

// Async thunk for Sign Up
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (formData, { rejectWithValue }) => {
    let apiUrl = '';
    if (formData.role === 'Instructor') {
      apiUrl = 'http://localhost:8080/user/instructor/signUp';
    } else if (formData.role === 'Student') {
      apiUrl = 'http://localhost:8080/user/student/signUp';
    }

    try {
      const response = await axios.post(apiUrl, formData, { withCredentials: true });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Sign Up Failed');
    }
  }
);

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to log out the user
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
      state.error = null;
      localStorage.removeItem('auth');
    },
    // Action to set authentication state from localStorage
    setCredentials(state, action) {
      const { user, accessToken, refreshToken, role } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.role = role;
    },
  },
  extraReducers: (builder) => {
    // Sign In
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Adjust based on your API response
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.role = action.payload.role;
        state.error = null;
        // Persist auth state in localStorage
        localStorage.setItem('auth', JSON.stringify(state));
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Sign In Failed';
      });

    // Sign Up
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        // Optionally, auto sign in after sign up
        Swal.fire({
          title: 'Success',
          text: 'Account created successfully! Please sign in.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Sign Up Failed';
        Swal.fire({
          title: 'Error',
          text: state.error,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
