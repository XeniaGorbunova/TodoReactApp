import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./slices/todosSlice";
import { initState } from "./initialState";

export const store = configureStore({
  preloadedState: initState,  
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
