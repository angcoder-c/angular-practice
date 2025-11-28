import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFetchComponent } from './pokemon-fetch.component';

describe('PokemonFetchComponent', () => {
  let component: PokemonFetchComponent;
  let fixture: ComponentFixture<PokemonFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonFetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
