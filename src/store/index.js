import { configureStore } from "@reduxjs/toolkit";
import User from './slices/userAuth.slice'

export default configureStore({
  reducer: {
    User
  }
})