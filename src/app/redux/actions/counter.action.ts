import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const setCounter = createAction(
  '[Counter Component] Set counter',
  props<{ num: number }>()
);

export const sideEffectAction = createAction(
  '[Counter Component] Side effect Action'
);
