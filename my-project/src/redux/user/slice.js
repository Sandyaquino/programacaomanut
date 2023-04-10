import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: [
    { 
      name: "Sandy",
      email: "sandy.santoss@neoenergia.com" }
    ],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
             state.currentUser = action.payload;
        }
    }


});

export const { loginUser } = userSlice.actions;