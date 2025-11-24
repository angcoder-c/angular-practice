import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * Ingresar un texto y colocar un boton para mostrar/ocultar
 * Estado
 * - hideWord
 * - buttonState TRUE=mostar FALSE=oculto
 * Metodos
 * - changeButtonState
 * - updateWord
 */

@Component({
  selector: 'app-show-hide-string',
  imports: [ReactiveFormsModule],
  templateUrl: './show-hide-string.component.html',
  styleUrl: './show-hide-string.component.css'
})
export class ShowHideStringComponent {
  word:string='HELLO'
  hideWord: string ='*****'
  buttonState: Boolean =true

  inputGroup = new FormGroup({
    word: new FormControl(this.word, Validators.required)
  })

  updateWord () {
    if (this.inputGroup.valid){
      this.word=this.inputGroup.value.word || ''
      this.hideWord='*'.repeat(this.word.length || 0)
    }

    this.inputGroup.patchValue({ word: '' })
  }

  changeButtonState () {
    this.buttonState = !this.buttonState
  }
}
