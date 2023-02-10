import React, { useState } from "react";
import styled from "styled-components";
import { TodoTypes } from "../types/redux";

const InputWrapper = styled.form`
  width: 80%;
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
  const [todo, setTodo] = useState<Omit<TodoTypes, "isDone" | "id">>({
    title: "",
    description: "",
  });

  return (
    <InputWrapper>
      <input
        type="text"
        placeholder="title.."
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="description.."
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button type="submit">추가!</button>
    </InputWrapper>
  );
};

export default Input;
