import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStringsComponent } from './list-strings.component';

describe('ListStringsComponent', () => {
  let component: ListStringsComponent;
  let fixture: ComponentFixture<ListStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStringsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
