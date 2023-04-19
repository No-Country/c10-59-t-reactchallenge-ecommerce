import { configureStore } from "@reduxjs/toolkit";
import User from './slices/userAuth.slice';
import Cart from "./slices/cartList.slice";

export default configureStore({
  reducer: {
    User,
    Cart
  }
});
