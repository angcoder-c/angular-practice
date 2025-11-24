import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideStringComponent } from './show-hide-string.component';

describe('ShowHideStringComponent', () => {
  let component: ShowHideStringComponent;
  let fixture: ComponentFixture<ShowHideStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowHideStringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHideStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
