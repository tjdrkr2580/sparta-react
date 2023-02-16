import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(null);
  const fetchTodo = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    setState(data);
  };
  useEffect(() => {
    fetchTodo();
  }, []);
  console.log(state);
  return (
    <div className="App">
      {state &&
        state.map((element) => <div key={element.id}>{element.title}</div>)}
    </div>
  );
}

export default App;
