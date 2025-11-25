import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChildCounterComponent } from './card-child-counter.component';

describe('CardChildCounterComponent', () => {
  let component: CardChildCounterComponent;
  let fixture: ComponentFixture<CardChildCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChildCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChildCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
