import { TestBed, async, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { VisitorGuard } from './visitor.guard';

describe('VisitorGuard', () => {
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
        VisitorGuard,
        {provide: Store, useClass: MockStore}
      ]
    });
  });

  it('should ...', inject([VisitorGuard], (guard: VisitorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
