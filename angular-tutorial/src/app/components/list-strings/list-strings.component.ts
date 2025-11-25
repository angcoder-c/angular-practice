import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

export interface Task {
  id: number
  text: string
}

/**
 * lista de strings y agregar uno nuevo desde un input
 * Estados:
 * - lsString
 * - newString
 * Metodos:
 * - add string
 */

@Component({
  selector: 'app-list-strings',
  imports: [
    ReactiveFormsModule,
    TaskComponent
  ],
  templateUrl: './list-strings.component.html',
  styleUrl: './list-strings.component.css'
})
export class ListStringsComponent {
  tasks: Task[] = [];

  stringControls = new FormGroup({
    newTask: new FormControl('')
  })

  addString() {
    if (this.stringControls.value.newTask) {
      this.tasks.push({
        id: this.tasks.length + 1,
        text: this.stringControls.value.newTask
      })
    }
    this.stringControls.patchValue({ newTask: '' })
  }

  deleteTask (taskId: number | undefined) {
    this.tasks = this.tasks.filter(item=>item.id != taskId)
  }
}
