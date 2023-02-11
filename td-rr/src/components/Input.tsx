import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TodoTypes } from "../types/redux";
import { add, RootState } from "../utils/redux/modules/todo";

const InputWrapper = styled.form`
  width: 100%;
  margin: 0 auto;
  height: 5rem;
  background-color: #cbcbcb;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  input {
    width: 12rem;
    border: 0.25px solid #121212;
    border-radius: 0.6rem;
    height: 3rem;
    padding: 0.4rem 0.8rem;
    :focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    height: 3rem;
    width: 5rem;
  }
`;

const Input = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<Omit<TodoTypes, "isDone" | "id">>({
    title: "",
    description: "",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (todo.title !== "" && todo.description !== "") {
      e.preventDefault();
      dispatch(add(todo));
      setTodo({
        title: "",
        description: "",
      });
    } else {
      e.preventDefault();
      alert("공백 없이 입력해주세요!");
    }
  };
  return (
    <InputWrapper onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="title.."
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="description.."
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button type="submit">추가!</button>
    </InputWrapper>
  );
};

export default Input;
