import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload);
		},
		removeFromCart: (state, action) => {
			console.log(action.payload);
			const index = state.cart.findIndex(
				(item) => item.productName === action.payload.productName
			);
			if (index !== -1) state.cart.splice(index, 1);
		},
		clearCart: (state) => {
			state.cart = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
