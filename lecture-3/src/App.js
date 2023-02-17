import axios from "axios";
import { useEffect, useState } from "react";
import api from "./api.js";

function App() {
  const [state, setState] = useState(null);
  const [value, setValue] = useState({
    title: "",
  });
  const [edit, setEdit] = useState({
    id: "",
    edit: "",
  });
  const fetchTodo = async () => {
    const { data } = await api.get("/todos");
    setState(data);
  };
  useEffect(() => {
    fetchTodo();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await api.post("/todos", value);
    setState([...state, value]);
    fetchTodo();
  };
  const onDelete = async (id) => {
    await api.delete(`/todos/${id}`);
    setState(state.filter((element) => element.id !== id));
  };
  const onEdit = async () => {
    await api.patch(`todos/${edit.id}`, {
      title: edit.edit,
    });
    setState(
      state.map((todo) =>
        todo.id == edit.id ? { ...todo, title: edit.edit } : todo
      )
    );
    setEdit({
      id: "",
      edit: "",
    });
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="수정할 아이디"
        onChange={(e) => setEdit({ ...edit, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="수정할 영역"
        onChange={(e) => setEdit({ ...edit, edit: e.target.value })}
      />
      <button onClick={onEdit}>수정</button>
      <form action="post" onSubmit={onSubmit}>
        <input
          type="text"
          value={value.title}
          onChange={(e) => setValue({ title: e.target.value })}
        />
        <button>추가</button>
      </form>
      {state &&
        state.map((element) => (
          <div key={element.id}>
            <span>{element.id}</span>
            <div>{element.title}</div>
            <button onClick={() => onDelete(element.id)}>삭제</button>
          </div>
        ))}
    </div>
  );
}

export default App;
