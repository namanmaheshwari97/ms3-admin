import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBlacklistComponent } from './email-blacklist.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('EmailBlacklistComponent', () => {
  let component: EmailBlacklistComponent;
  let fixture: ComponentFixture<EmailBlacklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ EmailBlacklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
