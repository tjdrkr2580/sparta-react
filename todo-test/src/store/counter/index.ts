import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { ignoreElements, Observable, tap } from 'rxjs';
import { RootState, useAppDispatch, useAppSelector } from '../helpers';

// Slice
export const counterSlice = createSlice({
  extraReducers: () => {},
  initialState: { count: 0 },
  name: 'counter',
  reducers: {
    decrement: (state) => {
      state.count -= 1;
    },
    increment: (state) => {
      state.count += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});
const { increment, decrement } = counterSlice.actions;

// Epic
export const counterEpic = (actions$: Observable<Action>): Observable<Action> =>
  actions$.pipe(
    ofType(decrement, increment),
    // eslint-disable-next-line no-console
    tap((action) => console.log(`Epic: ${action.type}`)),
    ignoreElements()
  );

// Hook
export const useCounter = (): {
  counter: { count: number };
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
} => {
  const dispatch = useAppDispatch();

  return {
    counter: useAppSelector((state: RootState) => state.counter),
    handleDecrementClick: () => dispatch(decrement()),
    handleIncrementClick: () => dispatch(increment()),
  };
};
