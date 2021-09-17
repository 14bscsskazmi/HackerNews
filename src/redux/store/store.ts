/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import thunk, { ThunkAction } from 'redux-thunk';
import {AsyncStorage} from "react-native";
import { configureStore, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Imports: Redux
import rootReducer from '../reducers';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['newsReducer'],
  // Blacklist (Don't Save Specific Reducers)
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Middleware: Redux Persist Persister
const persistor = persistStore(store);
// Exports
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
