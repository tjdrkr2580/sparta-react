import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TodoTypes } from "../types/redux";
import { remove, update } from "../utils/redux/modules/todo";

interface TodoElementProps {
  todo: TodoTypes;
}

const TodoWrapper = styled.section`
  width: 100%;
  width: 15rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #c7c7c7;
  color: black;
  text-decoration: none;
  gap: 1rem;
  h1 {
    font-size: 1.1rem;
  }
  p {
    width: 9rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .buttonWrapper {
    z-index: 999;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
  }
`;

const TodoElement = ({ todo }: TodoElementProps) => {
  const dispatch = useDispatch();
  return (
    <TodoWrapper>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <div className="buttonWrapper">
        <button onClick={() => dispatch(update(todo.id))}>
          {!todo.isDone ? "완료" : "취소"}
        </button>
        <button onClick={() => dispatch(remove(todo.id))}>삭제!</button>
        <Link to={`/${todo.id}`}>상세보기</Link>
      </div>
    </TodoWrapper>
  );
};

export default TodoElement;
