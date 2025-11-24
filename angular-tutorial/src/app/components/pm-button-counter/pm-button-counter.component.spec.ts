import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmButtonCounterComponent } from './pm-button-counter.component';

describe('PmButtonCounterComponent', () => {
  let component: PmButtonCounterComponent;
  let fixture: ComponentFixture<PmButtonCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmButtonCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmButtonCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
