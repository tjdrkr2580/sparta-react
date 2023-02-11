import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoTypes } from "../../../types/redux";

const initialState: TodoTypes[] = [];

export const toDos = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        isDone: false,
      });
    },
    update: (state, action) => {
      return state.map((element) =>
        element.id === action.payload
          ? { ...element, isDone: !element.isDone }
          : element
      );
    },
    remove: (state, action) => {
      return state.filter((element) => element.id !== action.payload);
    },
  },
});

export const { add, remove, update } = toDos.actions;
const store = configureStore({ reducer: toDos.reducer });
export type RootState = ReturnType<typeof store.getState>;
export default store;
