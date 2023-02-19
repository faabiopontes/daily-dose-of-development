import { createAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// HYDRATE string const should first be used to create a typed action
// In this way we are forced to type the payload of our action
const hydrate = createAction<AppState>(HYDRATE);

// Actual slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  },

  // Special reducer for hydrating the state.
  // Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    });
  },
});

export const { setAuthState } = authSlice.actions;
export const selectAuthState = (state: AppState) => state.auth.authState;
export default authSlice.reducer;
