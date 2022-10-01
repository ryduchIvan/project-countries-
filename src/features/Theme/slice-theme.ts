import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
export type ThemeStore = "light" | "dark";
export const sliceTheme = createSlice({
	name: "theme/",
	initialState : "light" as ThemeStore,
	reducers: {
		chengeTheme: (state, action  : PayloadAction<ThemeStore>) => {
			state = action.payload;
			return state
		}
	}
})

export const { chengeTheme } = sliceTheme.actions;

export const selectTheme = (state: RootState) => state.theme;

export const themeReducer = sliceTheme.reducer;