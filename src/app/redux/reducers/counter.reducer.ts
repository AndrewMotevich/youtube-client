import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  setCounter,
} from '../actions/counter.action';

export const initialState = 0;

export const CounterReducer = createReducer(
  initialState,
  on(increment, (state): number => state + 1),
  on(decrement, (state): number => state - 1),
  on(reset, (): number => 0),
  on(setCounter, (state, action): number => action.num)
);
