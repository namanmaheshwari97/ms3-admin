import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableComponent } from './users-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';

describe('UsersTableComponent', () => {
  class MockStore {
    select(param: any) {
      return Observable.of('token');
    }
    dispatch(param: any) {
    }
  }

  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [ UsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
