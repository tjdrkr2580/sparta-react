import React, { useEffect } from "react";
import { useAppDispatch, __getTodos } from "./todoSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(__getTodos());
  }, []);
  return (
    <div className="App">
      <h1>Thunk app</h1>
    </div>
  );
}

export default App;
