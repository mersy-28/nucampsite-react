import { createSlice } from '@reduxjs/toolkit';

// start with no logged in user
const initialState = {
  currentUser: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    }
  }
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;