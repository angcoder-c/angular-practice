import { Component, output, input } from '@angular/core';

@Component({
  selector: 'app-card-child-counter',
  imports: [],
  templateUrl: './card-child-counter.component.html',
  styleUrl: './card-child-counter.component.css'
})
export class CardChildCounterComponent {
  readonly changeCounterEvent = output<number>()
  readonly titulo = input<string>()
  readonly descripcion = input<string>()

  up(){
    this.changeCounterEvent.emit(1)
  }

  down(){
    this.changeCounterEvent.emit(-1)
  }
}
