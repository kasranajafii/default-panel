import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "@/store/slices/sampleSlice";

export const store = configureStore({
  reducer: {
    sampleSlice: sampleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
