import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ILoginState, IRegiserUserResponse } from "../../types";
import { registerUserApi } from "../../services/register";

// Define a type for the slice state

// Define the initial state using that type
const initialState: ILoginState = {
  status: "idle",
  currentUser: {} as IRegiserUserResponse,
  error: "",
};

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (
    registrationRequest: any,
    { rejectWithValue }
  ): Promise<IRegiserUserResponse> => {
    try {
      const response: IRegiserUserResponse = await registerUserApi(
        registrationRequest
      );

      return response;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

export const registerSlice = createSlice({
  name: "registration",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<IRegiserUserResponse>) => {
          state.status = "success";
          state.currentUser = action.payload;
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
