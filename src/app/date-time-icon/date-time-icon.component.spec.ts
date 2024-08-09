import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeIconComponent } from './date-time-icon.component';

describe('DateTimeIconComponent', () => {
  let component: DateTimeIconComponent;
  let fixture: ComponentFixture<DateTimeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTimeIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTimeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
