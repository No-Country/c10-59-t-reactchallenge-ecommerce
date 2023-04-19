import { createSlice } from "@reduxjs/toolkit";
import { addCart, deleteCart, totalProducts } from "../../utils/Cart";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: JSON.parse(sessionStorage.getItem("cartList")) || [],
  },
  reducers: {
    addProduct: addCart,
    deleteProduct: deleteCart,
  }
});

export const getTotalPrice = totalProducts;

export const { addProduct, deleteProduct} = CartSlice.actions;

export default CartSlice.reducer;
