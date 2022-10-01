import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
;
export const loadCountry = createAsyncThunk(
	"@@details/load-country",
	async (name, { extra: { api } }) => {
		const response = await fetch(api.searchByCountry(name));
		const data = await response.json();
		return data;
	}
)

export const loadNeighbours = createAsyncThunk(
	"@@details/load-neighbours",
	async (codes, { extra: { api } }) => {
		const response = await fetch(api.filterByCode(codes))
		const data = await response.json();
		return data;
	}
)
const initialState = {
	status: "idle",
	country: null,
	neighbours: [],
	error: null
}
export const detailsSlice = createSlice({
	name: "@@details",
	initialState,
	reducers: {
		clearDetails: (state) => {
			return initialState
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountry.pending, (state, action) => {
				state.status = "loading";
				state.error = null
			})
			.addCase(loadCountry.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.payload;
			})
			.addCase(loadCountry.fulfilled, (state, action) => {
				state.country = action.payload[0];
				state.status = "received"
			})
			.addCase(loadNeighbours.pending, (state, action) => {
				console.log(action);
			})
			.addCase(loadNeighbours.rejected, (state, action) => {
				console.log(action);
			})
			.addCase(loadNeighbours.fulfilled, (state, action) => {
				console.log(action);
				state.neighbours = action.payload;
			})
	}
})

export const detailsReducer = detailsSlice.reducer;

export const selectDetails = store => store.details;

export const { clearDetails } = detailsSlice.actions;