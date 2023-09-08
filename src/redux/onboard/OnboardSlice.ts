import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface OnboardState {
  isOnboarded: boolean;
  loading: boolean;
}

const initialState: OnboardState = {
  isOnboarded: false,
  loading: false,
};

export const getStatus = createAsyncThunk("onboard/getStatus", async () => {
  //AsyncStorage.clear()
  const response = await AsyncStorage.getItem("isOnboarded");
  return response;
});

export const setStatus = createAsyncThunk(
  "onboard/setStatus",
  async (status: boolean) => {
    await AsyncStorage.setItem("isOnboarded", status.toString());
    return status;
  }
);

const onboardSlice = createSlice({
  name: "onboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.isOnboarded = action.payload === "true";
    });
    builder.addCase(setStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.isOnboarded = action.payload;
    });
  },
});

export const onboardReducer = onboardSlice.reducer;
