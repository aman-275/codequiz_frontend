import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../view/Registration/registrationSlice";
import userReducer from "../sharedslices/userSlice";
import questionReducer from "../view/Question/questionSlice";

export const store = configureStore({
  reducer: {
    registrationReducer,
    userReducer,
    questionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
