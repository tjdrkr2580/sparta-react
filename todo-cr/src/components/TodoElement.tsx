import React from "react";
import "./todoelement.css";

interface todoListProps {
  todo: string;
}

const TodoElement = ({ todo }: todoListProps) => {
  return <div className="todoElement">{todo}</div>;
};

export default TodoElement;
