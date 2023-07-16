import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
  setCounter,
  sideEffectAction,
} from 'src/app/redux/actions/counter.action';
import selectFeatureCount from 'src/app/redux/selectors/counter.selector';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss'],
})
export default class CounterComponent {
  public count$?: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectFeatureCount);
  }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }

  public setCounter() {
    this.store.dispatch(setCounter({ num: 10 }));
  }

  public sideEffectAction() {
    this.store.dispatch(sideEffectAction());
  }
}
