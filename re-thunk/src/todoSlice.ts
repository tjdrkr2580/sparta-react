import { stateType } from "./type.d";
import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const initialState: stateType = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getTodos = createAsyncThunk<stateType>(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:4000/todos");
      //둘 다 toolkit에서 제공하는 api임, 성공과 실패 여부로 사용 용도를 나누는게 지금은 이해하기 쉬울듯
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getTodos.pending, (state: stateType) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getTodos.fulfilled, (state: stateType) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__getTodos.rejected, (state: stateType, action) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const {} = todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
