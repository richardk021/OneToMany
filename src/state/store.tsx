import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./Balance/balanceSlice";

export const store = configureStore({
    reducer: {
        balance: balanceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpatch = typeof store.dispatch;

export default store;