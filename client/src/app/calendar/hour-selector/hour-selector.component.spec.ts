import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourSelectorComponent } from './hour-selector.component';

describe('HourSelectorComponent', () => {
  let component: HourSelectorComponent;
  let fixture: ComponentFixture<HourSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
