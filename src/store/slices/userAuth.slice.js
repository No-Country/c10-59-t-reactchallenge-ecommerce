import { createSlice } from "@reduxjs/toolkit";

export const UserAuthSlice = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    setUserAuth: (state, action) => action.payload
  }
})

export const {setUserAuth} = UserAuthSlice.actions

export default UserAuthSlice.reducer