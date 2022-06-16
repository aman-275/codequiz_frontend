import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { loginUserApi, loginUserGoogleApi } from "../services/login";
import { ILoginState, IRegiserUserResponse, IUserState } from "../types";

const initialState: ILoginState = {
  status: "idle",
  currentUser: {} as IUserState,
  error: "",
};

export const loginSocialUser = createAsyncThunk(
  "user/loginSocialUser",
  async (data: any, { rejectWithValue }): Promise<IUserState> => {
    try {
      // const data = data
      console.log(data);
      const response: IUserState = await loginUserGoogleApi(data);
      localStorage.setItem("codequiztoken", response["access"]);
      localStorage.setItem("codequizrefresh", response["refresh"]);
      return response;
    } catch (error) {
      throw rejectWithValue(error);
    }

    // return data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",

  async (data: any, { rejectWithValue }): Promise<IUserState> => {
    try {
      // const data = data

      const response: IUserState = await loginUserApi(data);
      localStorage.setItem("codequiztoken", response["access"]);
      localStorage.setItem("codequizrefresh", response["refresh"]);
      return response;
    } catch (error) {
      throw rejectWithValue(error);
    }

    // return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    googleAccessTokenError(state, action) {
      state.status = "error";
      state.error = JSON.stringify(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginSocialUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        loginSocialUser.fulfilled,
        (state, action: PayloadAction<IUserState>) => {
          state.status = "success";
          state.currentUser = action.payload;
        }
      )
      .addCase(loginSocialUser.rejected, (state, action) => {
        state.status = "error";
        state.error = JSON.stringify(action.payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<IUserState>) => {
          state.status = "success";
          state.currentUser = action.payload;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "error";
        state.error = JSON.stringify(action.payload);
      });
  },
});

export const { googleAccessTokenError } = userSlice.actions;

export default userSlice.reducer;
