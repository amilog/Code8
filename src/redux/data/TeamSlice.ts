import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeamsModel } from "../../models/dataModels";
import api from "../../network/api";

export interface TeamState {
  teams: TeamsModel[];
  team: TeamsModel[];
  loading: boolean;
  byIdLoading: boolean;
  error: string | null;
}

const initialState: TeamState = {
  teams: [],
  loading: false,
  byIdLoading: false,
  error: null,
  team: [],
};

export const getTeamState = createAsyncThunk("team/getAllPlants", async () => {
  const response = await api.getTeams();
  return response;
});

export const getTeamByIdState = createAsyncThunk(
  "team/getTeamById",
  async (id: string) => {
    const response = await api.getTeamById(id);
    return response;
  }
);

export const TeamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeamState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTeamState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.teams = action.payload;
    });
    builder.addCase(getTeamState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(getTeamByIdState.pending, (state, action) => {
      state.byIdLoading = true;
      state.error = null;
    });
    builder.addCase(getTeamByIdState.fulfilled, (state, action) => {
      state.byIdLoading = false;
      state.error = null;
      state.team = action.payload;
    });
    builder.addCase(getTeamByIdState.rejected, (state, action) => {
      state.byIdLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export const teamReducer = TeamSlice.reducer;
