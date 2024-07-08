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
      // __deleteTodo가 pending 상태일 때 해당 할 일의 deleteLoading 상태를 true로 설정합니다.
      .addCase(__deleteTodo.pending, (state, action) => {
        state.deleteLoading = action.meta.arg;
      })
      // __deleteTodo가 fulfilled 상태일 때 해당 할 일의 deleteLoading 상태를 false로 설정하고, 특정 ID를 가진 할 일을 리스트에서 제거합니다.
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.deleteLoading = "";
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
