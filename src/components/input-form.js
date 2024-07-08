import React from "react";
import { Button, InputContainer } from "./css/styles";
import useInput from "../hooks/useInput";
import useTodo from "../hooks/useTodo";
import InputBox from "./input-box";

const InputForm = () => {
  const title = useInput("");
  const body = useInput("");
  const { onAddTodo } = useTodo();

  //입력값 초기화
  const resetInputs = () => {
    title.setValue("");
    body.setValue("");
  };

  return (
    <InputContainer>
      <InputBox
        title={"제목: "}
        value={title.value}
        placeholder="할 일 제목"
        onChange={title.onChange}
      />
      <InputBox
        title={"내용: "}
        value={body.value}
        placeholder="할 일 내용"
        onChange={body.onChange}
      />
      <Button
        onClick={() =>
          onAddTodo({ title: title.value, body: body.value }, resetInputs)
        }
      >
        + 추가하기
      </Button>
    </InputContainer>
  );
};

export default InputForm;
