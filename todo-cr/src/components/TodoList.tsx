import React from "react";
import { useRecoilValue } from "recoil";
import { todoState } from "../atoms";
import { todoType } from "../type";
import TodoElement from "./TodoElement";
import "./todolist.css";

const TodoList = () => {
  const todoList = useRecoilValue(todoState);
  return (
    <div className="todoListWrapper">
      {todoList.map((element: todoType) => (
        <TodoElement key={element.id} todo={element.todo} />
      ))}
    </div>
  );
};

export default TodoList;
