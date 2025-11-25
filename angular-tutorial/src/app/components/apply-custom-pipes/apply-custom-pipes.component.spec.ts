import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCustomPipesComponent } from './apply-custom-pipes.component';

describe('ApplyCustomPipesComponent', () => {
  let component: ApplyCustomPipesComponent;
  let fixture: ComponentFixture<ApplyCustomPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyCustomPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyCustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
