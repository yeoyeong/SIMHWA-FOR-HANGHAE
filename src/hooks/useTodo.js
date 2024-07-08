// import nextId from "react-id-generator/lib/nextId";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { __addToDo, __deleteTodo } from "../redux/modules/todoThunks";

function useTodo() {
  const dispatch = useDispatch();
  const id = nextId();

  // 시험 문제 1
  const onAddTodo = ({ title, body }, resetInputs) => {
    dispatch(__addToDo({ id: id, title, body }));
    resetInputs();
  };

  const onDeleteTodo = (id) => {
    dispatch(__deleteTodo(id));
    /**
     * 시험 문제 2.
     * 이곳에서 삭제하기 기능을 구현해주세요.
     */
  };

  return {
    onAddTodo,
    onDeleteTodo,
  };
}

export default useTodo;
