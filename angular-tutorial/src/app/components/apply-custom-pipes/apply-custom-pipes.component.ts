import { Component } from '@angular/core';
import { CapitalizePipe} from '../../shared/pipes/capitalize.pipe';
import { ReversePipe } from '../../shared/pipes/reverse.pipe';
import { HideTextPipe } from '../../shared/pipes/hide-text.pipe';
import { FormsModule } from '@angular/forms';

/**
 * aplicar los custom pipes y utilizar el ngModel
 * Estados:
 * - text
 */

@Component({
  selector: 'app-apply-custom-pipes',
  imports: [
    FormsModule, 
    CapitalizePipe, 
    HideTextPipe, 
    ReversePipe
  ],
  templateUrl: './apply-custom-pipes.component.html',
  styleUrl: './apply-custom-pipes.component.css'
})
export class ApplyCustomPipesComponent {
  text = ''
}
