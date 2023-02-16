import { useDispatch, useSelector } from "react-redux";
import { add_count, minus_count } from "./redux/module/counter";

function App() {
  const data = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <span>{data}</span>
      <button onClick={() => dispatch(add_count())}>+</button>
      <button onClick={() => dispatch(minus_count())}>-</button>
    </div>
  );
}

export default App;
