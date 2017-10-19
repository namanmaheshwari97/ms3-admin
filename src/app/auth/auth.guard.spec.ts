import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';

describe('AuthGuard', () => {
  class MockStore {
    select(param: any) {
      return Observable.of('token');
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthGuard,
        {provide: Store, useClass: MockStore}
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
