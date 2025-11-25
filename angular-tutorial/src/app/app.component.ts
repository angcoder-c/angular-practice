import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PmButtonCounterComponent } from './components/pm-button-counter/pm-button-counter.component';
import { ListStringsComponent } from './components/list-strings/list-strings.component';
import { ShowHideStringComponent } from './components/show-hide-string/show-hide-string.component';
import { ApplyCustomPipesComponent } from './components/apply-custom-pipes/apply-custom-pipes.component';
import { CardParentComponent } from './components/card-parent/card-parent.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    PmButtonCounterComponent,
    ListStringsComponent,
    ShowHideStringComponent,
    ApplyCustomPipesComponent,
    CardParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
}
