"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAuth } from "./features/userAuthSlice";
import { vendorAuth } from "./features/vendorAuthSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "@/redux/storage";
import { sidebarAuth } from "./features/sidebarSlice";

const persistConfig = {
  key: "root",
  storage, //Error : storage is imported from 'redux-persist/lib/storage'
  whitelist: ["userAuth", "vendorAuth"], // only auth will be persisted
  version: 1,
};

const rootReducer = combineReducers({
  userAuth: userAuth.reducer,
  vendorAuth: vendorAuth.reducer,
  sidebarAuth: sidebarAuth.reducer,
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
