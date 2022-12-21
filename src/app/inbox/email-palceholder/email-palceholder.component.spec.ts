import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPalceholderComponent } from './email-palceholder.component';

describe('EmailPalceholderComponent', () => {
  let component: EmailPalceholderComponent;
  let fixture: ComponentFixture<EmailPalceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPalceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPalceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
