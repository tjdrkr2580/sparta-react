import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

// const COUNT_ADD = "COUNT_ADD";
// const COUNT_MINUS = "COUNT_MINUS";

//rtk에서는 reducers 안에 자동으로 액션함수로 생성됨.
// export const add_count = () => {
//   return {
//     type: COUNT_ADD,
//   };
// };

// export const minus_count = () => {
//   return {
//     type: COUNT_MINUS,
//   };
// };

//reducer
// const counterReducer = (state = initialState, action: AnyAction) => {
//   switch (action.type) {
//     case COUNT_ADD:
//       return (state = state + 1);
//     case COUNT_MINUS:
//       return (state = state - 1);
//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add_count: (state) => (state = state + 1),
    minus_count: (state) => (state = state - 1),
  },
});

export default counterSlice.reducer;
export const { add_count, minus_count } = counterSlice.actions;
