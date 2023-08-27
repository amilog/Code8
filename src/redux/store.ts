import { configureStore } from "@reduxjs/toolkit";
import { onboardReducer } from "./onboard/OnboardSlice";

export const store = configureStore({
  reducer: {
    onBoard: onboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
