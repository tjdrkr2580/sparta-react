import counterReducer from "./redux/module/counter";
import { configureStore } from "@reduxjs/toolkit";

// const rootStore = combineReducers({
//   counterReducer,
// });
// const store = createStore(rootStore);
// export type RootReducer = ReturnType<typeof rootStore>;
// export default store;

//rtk 기본으로 combineReducers의 기능을 지원함.
const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;
