import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from "./todoSlice";
import contentReducer from "./contentSlice";
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage, // localStorage
};

const reducer = combineReducers({
  todo: todoReducer,
  content: contentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  // reducer: {
  //   todo: todoReducer
  // }
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
