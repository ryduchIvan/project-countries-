import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	region: ""
}

export const searchSlice = createSlice({
	name: "search/",
	initialState,
	reducers: {
		setSearchByName: (state, action) => {
			return {
				...state,
				name: action.payload
			}
		},
		setSearchByRegion: (state, action) => {
			state.region = action.payload;
		},
		clearSearch: (state, action) => {
			return initialState;
		}
	}
})

export const { setSearchByName, setSearchByRegion, clearSearch } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;

export const selectName = store => store.search.name;
export const selectRegion = store => store.search.region;