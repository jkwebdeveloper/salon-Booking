'use client';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { auth } from "./features/authSlice";
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from '@/redux/storage';

const persistConfig = {
    key: 'root',
    storage, //Error : storage is imported from 'redux-persist/lib/storage'
    whitelist: ['auth'], // only auth will be persisted
    version: 1,
};

const rootReducer = combineReducers({
    auth: auth.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;