import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./Balance/balanceSlice";
import savingsReducer from "./Savings/savingsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key:"root",
    storage
}

export const store = configureStore({
    reducer: {
        balance: persistReducer(persistConfig, balanceReducer),
        savings: persistReducer(persistConfig, savingsReducer),
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpatch = typeof store.dispatch;

export default store;
export const persistor = persistStore(store);