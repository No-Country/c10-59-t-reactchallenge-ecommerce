export const addCart = (state, action) => {
    const isInCart = state.cartList.some((product) => product.id === action.payload.id);

    if (isInCart) {
        const productInCart = state.cartList.find((product) => product.id === action.payload.id);
        productInCart.quantity += action.payload.quantity;
        sessionStorage.setItem("cartList", JSON.stringify(state.cartList))
    } else {
        state.cartList.push(action.payload);
        sessionStorage.setItem("cartList", JSON.stringify(state.cartList))
    } 
}

export const deleteCart = (state, action) => {
    const newCartList = state.cartList.filter((product) => product.id !== action.payload.id);
    sessionStorage.setItem("cartList", JSON.stringify(newCartList));

    state.cartList = newCartList;
}

export const totalProducts = (state) => state.Cart.cartList.reduce((total, product) => total + (product.price * product.quantity), 0);
