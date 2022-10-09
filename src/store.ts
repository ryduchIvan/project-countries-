import axios from 'axios';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import * as api from 'config';
import { themeReducer } from 'features/theme/theme-slice';
import { controlsReducer } from 'features/controls/controls-slice';
import { countryReducer } from 'features/countries/countries-slice';
import { detailsReducer } from 'features/details/details-slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers(
  {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
  }
)
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: axios,
        api,
      },
    },
    serializableCheck: false,
  })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor = persistStore(store);