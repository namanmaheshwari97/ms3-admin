import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBlacklistTableComponent } from './email-blacklist-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';

describe('EmailBlacklistTableComponent', () => {
  class MockStore {
    select(param: any) {
      return Observable.of([
        {
          id: 1,
          email: 'blacklist@email.com'
        }
      ]);
    }
    dispatch(param: any) {
    }
  }

  let component: EmailBlacklistTableComponent;
  let fixture: ComponentFixture<EmailBlacklistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [ EmailBlacklistTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBlacklistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
