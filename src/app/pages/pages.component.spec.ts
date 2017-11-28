import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PagesComponent} from './pages.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('PagesComponent', () => {
  class MockStore {
    select(param: any) {
      return Observable.of({
        token: 'someToken',
        user: {
          id: 1,
          email: 'admin@email.com',
          phone: '',
          active: true
        }
      });
    }

    dispatch(param: any) {
    }
  }
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [PagesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
