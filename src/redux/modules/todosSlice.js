import { createSlice } from "@reduxjs/toolkit";
import { __addToDo, __deleteTodo } from "./todoThunks";

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  addTodoLoading: false,
  deleteLoading: "",
  reducers: {
    addTodo: (state, action) => {
      state.list.unshift(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__addToDo.pending, (state) => {
        state.addTodoLoading = true;
      })
      .addCase(__addToDo.fulfilled, (state, action) => {
        state.addTodoLoading = false;
        state.list.unshift(action.payload);
      })
      .addCase(__deleteTodo.pending, (state, action) => {
        state.deleteLoading = action.meta.arg;
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.deleteLoading = "";
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
