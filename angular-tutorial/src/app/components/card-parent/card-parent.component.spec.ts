import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParentComponent } from './card-parent.component';

describe('CardParentComponent', () => {
  let component: CardParentComponent;
  let fixture: ComponentFixture<CardParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
