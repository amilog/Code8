import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../network/api";
import { ResultModel } from "../../models/dataModels";

interface ValuationState {
  result: ResultModel[];
  isStarted: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ValuationState = {
  result: [],
  isStarted: false,
  loading: false,
  error: null,
};

export const startHackathonState = createAsyncThunk(
  "team/startHackathon",
  async () => {
    const response = await api.startHackathon();
    return response;
  }
);

export const postCoachValuateState = createAsyncThunk(
  "team/postCoachValuate",
  async (data: { type: string; id: string; score: number }) => {
    const response = await api.postCoachValuate(data.id, data.score, data.type);
    return response;
  }
);

export const postJuryValuateState = createAsyncThunk(
  "team/postJuryValuate",
  async (data: { id: string; score: number }) => {
    const response = await api.postJuryValuate(data.id, data.score);
    return response;
  }
);

export const getResultState = createAsyncThunk("team/getResult", async () => {
  const response = await api.getResult();
  return response;
});

export const ValuationSlice = createSlice({
  name: "valuation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startHackathonState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(startHackathonState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.isStarted = action.payload;
    });
    builder.addCase(startHackathonState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(postCoachValuateState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(postJuryValuateState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(getResultState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getResultState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.result = action.payload;
    });
    builder.addCase(getResultState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const valuationReducer = ValuationSlice.reducer;
