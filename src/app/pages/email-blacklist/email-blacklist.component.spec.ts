import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBlacklistComponent } from './email-blacklist.component';

describe('EmailBlacklistComponent', () => {
  let component: EmailBlacklistComponent;
  let fixture: ComponentFixture<EmailBlacklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
