import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBlacklistFormComponent } from './email-blacklist-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

describe('EmailBlacklistFormComponent', () => {
  let component: EmailBlacklistFormComponent;
  let fixture: ComponentFixture<EmailBlacklistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ EmailBlacklistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBlacklistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
