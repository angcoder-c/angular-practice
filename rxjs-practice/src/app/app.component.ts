import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonFetchComponent } from './components/pokemon-fetch/pokemon-fetch.component';
import { BasicOperatorsComponent } from './components/basic-operators/basic-operators.component';
import { TakeuntilOperatorComponent } from './components/takeuntil-operator/takeuntil-operator.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PokemonFetchComponent,
    BasicOperatorsComponent,
    TakeuntilOperatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs-practice';
}
