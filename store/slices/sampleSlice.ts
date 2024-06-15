import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TSampleSliceState = {
  token: string | null;
  user: {
    name: string;
    email: string;
  };
};

const initialState: TSampleSliceState = {
  token: null,
  user: {
    name: "",
    email: "",
  },
};

const sampleSlice = createSlice({
  name: "sampleSlice",
  initialState,
  reducers: {
    setToken: (state: TSampleSliceState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (
      state: TSampleSliceState,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = sampleSlice.actions;
export default sampleSlice.reducer;
