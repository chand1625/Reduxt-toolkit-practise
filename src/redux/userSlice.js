import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Chand",
    email: "chand@gmail.com",
  },
  reducers: {
    updateUserData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
