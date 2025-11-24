import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PmButtonCounterComponent } from './components/pm-button-counter/pm-button-counter.component';
import { ListStringsComponent } from './components/list-strings/list-strings.component';
import { ShowHideStringComponent } from './components/show-hide-string/show-hide-string.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    PmButtonCounterComponent,
    ListStringsComponent,
    ShowHideStringComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
}
