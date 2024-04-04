// store.js
import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from '../feature/auth/navBarSlice';

export default configureStore({
  reducer: {
    user: navBarReducer,
  },
});
