import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../network/api";
import { MembersModel } from "../../models/dataModels";

interface MemberState {
  member: MembersModel[];
  loading: boolean;
  error: string | null;
}

const initialState: MemberState = {
  member: [],
  loading: false,
  error: null,
};

export const getMembersState = createAsyncThunk("team/getMembers", async () => {
  const response = await api.getMembers();
  return response;
});

export const getMemberByIdState = createAsyncThunk(
  "team/getMemberById",
  async (id: string) => {
    const response = await api.getMemberById(id);
    return response;
  }
);

export const MemberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMembersState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMembersState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.member = action.payload;
    });
    builder.addCase(getMembersState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(getMemberByIdState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMemberByIdState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.member = action.payload;
    });
    builder.addCase(getMemberByIdState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const memberReducer = MemberSlice.reducer;