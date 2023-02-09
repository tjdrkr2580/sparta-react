import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms";
import "./header.css";
const Header = () => {
  const [todoList, setTodoList] = useRecoilState(todoState);
  const [todo, setTodo] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitElement = {
      id: Date.now(),
      todo: todo,
    };
    if (todo === "") return;
    setTodoList((prev) => [...prev, submitElement]);
    setTodo("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form className="headerWrapper" onSubmit={onSubmit}>
      <input type="text" onChange={onChange} placeholder="What's your plan?" />
    </form>
  );
};

export default Header;
