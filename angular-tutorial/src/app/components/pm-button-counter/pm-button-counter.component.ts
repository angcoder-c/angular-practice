import { Component } from "@angular/core";

/**
 * Pensando a nivel de estado:
 * - estado
 * métodos:
 * - up
 * - down
 */

@Component({
  selector: "app-pm-button-counter",
  imports: [],
  templateUrl: "./pm-button-counter.component.html",
  styleUrl: "./pm-button-counter.component.css",
})
export class PmButtonCounterComponent {
  counter = 0;

  up() {
    this.counter++;
  }

  down() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}
