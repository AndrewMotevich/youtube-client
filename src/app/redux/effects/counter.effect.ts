import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { sideEffectAction, setCounter } from '../actions/counter.action';

@Injectable()
export default class CounterEffects {
  public counterSideEffect$ = createEffect(() => {
    try {
      return this.actions$.pipe(
        ofType(sideEffectAction),
        map(() => setCounter({ num: 100 }))
      );
    } catch (error) {
      throw new Error();
    }
  });

  constructor(private actions$: Actions) {}
}
