import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  imports: [ReactiveFormsModule],
  templateUrl: './list-strings.component.html',
  styleUrl: './list-strings.component.css'
})
export class ListStringsComponent {
  lsStrings: string[] = [];

  stringControls = new FormGroup({
    newString: new FormControl('')
  })

  addString() {
    if (this.stringControls.value.newString) {
      this.lsStrings.push(this.stringControls.value.newString)
    }
    this.stringControls.patchValue({ newString: '' })
  }
}
