import React from "react";
import { PageWrapper, TodoContainer, TodoHeader } from "./components/styles";

import InputForm from "./components/input-form";
import TodoList from "./components/todo_list-container";

function App() {
  return (
    <PageWrapper>
      <TodoContainer>
        <TodoHeader>🐢 SLOW TODO LIST 🐢</TodoHeader>
        <InputForm />
        <TodoList />
      </TodoContainer>
    </PageWrapper>
  );
}

export default App;
