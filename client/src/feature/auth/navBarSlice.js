// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const navBarSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userProfile: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.userProfile = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.userProfile = null;
    },
  },
});

export const { loginUser, logoutUser } = navBarSlice.actions;
export const selectUser = (state) => state.user;

export default navBarSlice.reducer;
