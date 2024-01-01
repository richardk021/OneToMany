import { createSlice } from "@reduxjs/toolkit";

interface SavingsState {
  name: string;
  value: number;
}

const initialState: SavingsState = {
  name: '',
  value: 0,
};

const savingsSlice = createSlice({
  name: "savings",
  initialState,
  reducers: {
    setObjective: (state, action) => {
      state.name = action.payload;
    },
    setSavings: (state, action) => {
      state.value = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setSavings, incrementByAmount, setObjective} =
  savingsSlice.actions;

export default savingsSlice.reducer;
