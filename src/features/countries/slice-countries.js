import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../config";
export const loadCountries = createAsyncThunk(
	"get-countries",
	async (_, { extra, rejectWithValue }) => {
		try {
			const response = await fetch(api.ALL_COUNTRIES);
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue("Somethin in the way")
		}
	}
)

export const sliceCountries = createSlice({
	name: "countries/",
	initialState: {
		status: "idle",
		list: [],
		error: null
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(action => action.type.endsWith("/pending"), (state) => {
				state.status = "loading";
				state.error = null
			})
			.addMatcher(action => action.type.endsWith("/rejected"), (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
			})
			.addMatcher(action => action.type.endsWith("/fulfilled"), (state, action) => {
				return {
					...state,
					status: "received",
					list: action.payload
				}
			})
	}

})

export const countriesReducer = sliceCountries.reducer;

export const selectInfo = (store) => ({
	status: store.countries.status,
	error: store.countries.error,
	length: store.countries.list.length
});

export const selectFiltredList = (list, name, region) => {
	return list.filter(
		(country) =>
			country.name.toLowerCase().includes(name.toLowerCase()) &&
			country.region.includes(region)
	);
};