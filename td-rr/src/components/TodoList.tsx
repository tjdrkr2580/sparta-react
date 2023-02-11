import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../utils/redux/modules/todo";
import TodoElement from "./TodoElement";

const TodoListWrapper = styled.section`
  margin-top: 7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title {
    font-size: 2rem;
  }
`;

const TodoGridWrapper = styled.ul`
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  place-items: center;
`;

const TodoList = () => {
  const todo = useSelector((state: RootState) => {
    return state;
  });
  console.log(todo);
  return (
    <TodoListWrapper>
      <h1 className="title">To do!</h1>
      <TodoGridWrapper>
        {todo.map((element, i) =>
          element.isDone === false ? (
            <TodoElement key={i} todo={element} />
          ) : null
        )}
      </TodoGridWrapper>
      <h1 className="title">Done!</h1>
      <TodoGridWrapper>
        {todo.map((element, i) =>
          element.isDone === true ? (
            <TodoElement key={i} todo={element} />
          ) : null
        )}
      </TodoGridWrapper>
    </TodoListWrapper>
  );
};

export default TodoList;
