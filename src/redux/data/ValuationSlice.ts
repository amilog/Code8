import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../network/api";
import { ResultModel } from "../../models/dataModels";

export interface ValuationState {
  result: ResultModel[];
  isStarted: boolean;
  loading: boolean;
  error: string | null;
  juryValuation: any[];
  coachValuation: any[];
}

const initialState: ValuationState = {
  result: [],
  isStarted: false,
  loading: false,
  error: null,
  juryValuation: [],
  coachValuation: [],
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
  async (data: { id: string; score: number; deviceId: string }) => {
    const response = await api.postJuryValuate(
      data.id,
      data.score,
      data.deviceId
    );
    return [data.score, data.deviceId, data.id];
  }
);

export const getJuryValuationState = createAsyncThunk(
  "team/getJuryValuation",
  async (id: string) => {
    const response = await api.getJuryValuation(id);
    if (response.message) return [];
    return response;
  }
);

export const getCoachValuationState = createAsyncThunk(
  "team/getCoachValuation",
  async (type: string) => {
    const response = await api.getCoachValuation(type);
    if (response.message) return [];
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
    builder.addCase(getJuryValuationState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getJuryValuationState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.juryValuation = action.payload;
    });
    builder.addCase(getJuryValuationState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(postJuryValuateState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      const data = {
        deviceId: action.payload[1],
        givenScore: action.payload[0],
        toTeam: {
          _id: action.payload[2],
        },
      };
      state.juryValuation = [...state.juryValuation, data];
    });
    builder.addCase(getCoachValuationState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.coachValuation = action.payload;
    });
    builder.addCase(postCoachValuateState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      const data = {
        coachType: action.payload.coachType,
        givenScore: action.payload.givenScore,
        toTeam: {
          _id: action.payload.toTeam,
        },
      };
      state.coachValuation = [...state.coachValuation, data];
    });
  },
});

export const valuationReducer = ValuationSlice.reducer;
