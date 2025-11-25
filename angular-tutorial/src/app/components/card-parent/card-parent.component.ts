import { Component } from '@angular/core';
import { CardChildCounterComponent } from '../card-child-counter/card-child-counter.component';

/**
 * card que se comunique con un contador en un compnente hijo
 * usando input y output
 * Estados
 * - counter
 * Metodos
 * - change
 */
@Component({
  selector: 'app-card-parent',
  imports: [
    CardChildCounterComponent
  ],
  templateUrl: './card-parent.component.html',
  styleUrl: './card-parent.component.css'
})
export class CardParentComponent {
  counter = 0;

  change (num: number) {
    this.counter += num;
  }
}
