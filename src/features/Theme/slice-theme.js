import { createSlice } from "@reduxjs/toolkit";

export const sliceTheme = createSlice({
	name: "theme/",
	initialState: "light",
	reducers: {
		chengeTheme: (store, action) => {
			return action.payload;
		}
	}
})

export const { chengeTheme } = sliceTheme.actions;

export const selectTheme = store => store.theme;

export const themeReducer = sliceTheme.reducer;