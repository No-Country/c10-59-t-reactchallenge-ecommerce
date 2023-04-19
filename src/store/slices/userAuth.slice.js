import { createSlice } from "@reduxjs/toolkit";

export const UserAuthSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    setUserAuth: (state, action) => state = action.payload
  }
})

export const {setUserAuth} = UserAuthSlice.actions

export default UserAuthSlice.reducer