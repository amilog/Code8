import { configureStore } from "@reduxjs/toolkit";
import { onboardReducer } from "./onboard/OnboardSlice";
import { teamReducer } from "./data/TeamSlice";
import { memberReducer } from "./data/MemberSlice";
import { valuationReducer } from "./data/ValuationSlice";

export const store = configureStore({
  reducer: {
    onBoard: onboardReducer,
    team: teamReducer,
    member: memberReducer,
    valuation: valuationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
