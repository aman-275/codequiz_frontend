import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IQuestionState, IQuestion } from "../../types";
import { questionsApi } from "../../services/questions";

// Define a type for the slice state

// Define the initial state using that type
const initialState: IQuestionState = {
  status: "idle",
  question: [],
  error: "",
};

export const questions = createAsyncThunk(
  "question/questions",
  async (): Promise<IQuestion[]> => {
    try {
      const response = await questionsApi();

      return response as IQuestion[];
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const questionSlice = createSlice({
  name: "question",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(questions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        questions.fulfilled,
        (state, action: PayloadAction<IQuestion[]>) => {
          state.status = "success";
          state.question = action.payload;
        }
      )
      .addCase(questions.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export default questionSlice.reducer;
