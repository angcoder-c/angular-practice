import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  readonly id = input<number>();
  readonly text = input<string>();
  readonly taskDeletedEvent = output<number | undefined>()

  deleteTask(){
    this.taskDeletedEvent.emit(this.id())
  }
}
