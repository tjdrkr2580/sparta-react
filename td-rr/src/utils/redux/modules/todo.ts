import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoTypes } from "../../../types/redux";
const initialState: TodoTypes[] = [];

export const todoSlice = createSlice({
  name: "todo",
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
        element.id === action.payload.id
          ? { ...element, isDone: !element.isDone }
          : element
      );
    },
    remove: (state, action: PayloadAction<TodoTypes>) => {
      return state.filter((element) => element.id !== action.payload.id);
    },
  },
});

export const { add, update, remove } = todoSlice.actions;
export const store = configureStore({ reducer: todoSlice.reducer });
export type RootState = ReturnType<typeof store.getState>;
