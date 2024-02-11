import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: null,
	password: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			state.isAuthenticated = true;
			state.user = action.payload;
			state.password = action.payload;
		},
		logoutUser: (state) => {
			state.isAuthenticated = false;
			state.user = null;
			state.password = null;
			state.token = null;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
	},
});

export const { loginUser, logoutUser, setToken } = authSlice.actions;
export default authSlice.reducer;
