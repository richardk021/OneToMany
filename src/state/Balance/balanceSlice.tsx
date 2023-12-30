import { createSlice } from "@reduxjs/toolkit";

interface BalanceState{
    value: number;
}

const initialState: BalanceState = {
    value: 0,
};

const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {
        setBalance: (state, action) => {
            state.value = action.payload;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        }
    },
})

export const { setBalance, incrementByAmount, decrementByAmount } = balanceSlice.actions;

export default balanceSlice.reducer;