import axios from "axios";
import * as api from "./config";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/Theme/slice-theme";
import { searchReducer } from "./features/Search/slice-search";
import { countriesReducer } from "./features/countries/slice-countries";
import { detailsReducer } from "./features/Details/slice-details";
import { combineReducers } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch } from "react-redux";
const rootReducer = combineReducers({
	theme: themeReducer,
	search: searchReducer,
	countries: countriesReducer,
	details: detailsReducer
});
const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				client: axios,
				api: api
			}
		},
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;