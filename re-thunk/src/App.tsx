import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, __getTodos } from "./todoSlice";

function App() {
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  console.log(todos.todos);

  // const dispatch = useAppDispatch();
  // const { isLoading, error, todos } = useSelector((state: stateType) => state);
  // useEffect(() => {
  //   dispatch(__getTodos());
  // }, [dispatch]);
  // console.log(todos);
  return (
    <div className="App">
      <h1>Thunk app</h1>
      {!todos.isLoading &&
        todos.todos.map((todo) => (
          <div key={todo.id}>
            {todo.id}
            {todo.title}
          </div>
        ))}
    </div>
  );
}

export default App;
