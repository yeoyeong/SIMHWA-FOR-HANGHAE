import React from "react";
import { useSelector } from "react-redux";
import { Button, TodoCard, TodoListContainer } from "./styles";
import useTodo from "../hooks/useTodo";
import LoadingCard from "./loading-card";

const TodoList = () => {
  const { onDeleteTodo } = useTodo();
  const todos = useSelector((state) => state.todos.list);
  const add_loading = useSelector((state) => state.todos.addTodoLoading);
  const delete_loading = useSelector((state) => state.todos.deleteLoading);

  return (
    <TodoListContainer>
      {add_loading && <LoadingCard value={"추가중 . . ."} />}
      {todos.map((todo) => (
        <TodoCard key={todo.id}>
          {delete_loading === todo.id ? (
            <LoadingCard value={"삭제중 . . . "} />
          ) : (
            <>
              <span>제목: {todo.title}</span>
              <span>할 일: {todo.body}</span>
              <Button onClick={() => onDeleteTodo(todo.id)}>삭제하기</Button>
            </>
          )}
        </TodoCard>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
