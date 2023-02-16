import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
