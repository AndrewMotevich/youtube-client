import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
} from 'src/app/redux/actions/counter.action';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss'],
})
export default class CounterComponent {
  public count$?: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  // eslint-disable-next-line class-methods-use-this
  public increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  // eslint-disable-next-line class-methods-use-this
  public decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  // eslint-disable-next-line class-methods-use-this
  public reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
