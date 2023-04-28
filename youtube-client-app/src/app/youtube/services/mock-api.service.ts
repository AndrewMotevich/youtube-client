import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import response from '../components/search-results/mock-results/results.json';
import { ItemObj } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class MockApiService {
  responseObject = response;

  getItemById(id: string): Observable<ItemObj> {
    const item = new Observable<ItemObj>((subscriber) => {
      this.responseObject.items.forEach((elem) => {
        subscriber.next(elem as unknown as ItemObj);
      });
      subscriber.complete();
    });
    return item.pipe(filter((elem) => elem.id === id));
  }
}
