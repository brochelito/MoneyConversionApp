import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyEntryComponent } from './money-entry.component';

describe('MoneyEntryComponent', () => {
  let component: MoneyEntryComponent;
  let fixture: ComponentFixture<MoneyEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
