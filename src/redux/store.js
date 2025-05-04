import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import filterReducer from "./filterSlice";

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

const persistConfig = {
  key: 'root',
  version: 1,
    storage,
    whitelist: ['todos'],
}

const persistedReducer = persistReducer(persistConfig, todosReducer);

export const store = configureStore({
    reducer: {
        todos: persistedReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);