import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initState } from "../initialState";
import type { Todo } from "../../../shared/model/Todo";
import type { RootState } from "..";

export const todosSlice = createSlice({
  name: "todos",
  initialState: initState.todos,
  reducers: {
    addNewTodo: {
        reducer(state, action: PayloadAction<Todo>) {
            state.push(action.payload);
        }, 
        prepare(title: string) {
            return {
                payload: {
                    id: crypto.randomUUID(),
                    title,
                    status: false
                }
            }
        }
    },
    deleteTodo(state, action: PayloadAction<Todo["id"]>) {
      return state.filter((todo: Todo) => todo.id !== action.payload);
    },
    changeTodoStatus(state, acttion: PayloadAction<Todo["id"]>) {
        const currentTodo = state.find((todo: Todo) => todo.id === acttion.payload);

        if (currentTodo) {
            currentTodo.status = !currentTodo.status;
        }
    },
    clearTodos() {
      return [];
    },
  },
});

export const { addNewTodo, deleteTodo, changeTodoStatus, clearTodos } =
  todosSlice.actions;

export const getAllTodosSelector = (state: RootState) => state.todos;  

export const todosReducer =  todosSlice.reducer;
