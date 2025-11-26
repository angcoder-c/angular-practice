import { Routes } from '@angular/router';
import { ColorClockComponent } from './components/color-clock/color-clock.component';
import { ListStringsComponent } from './components/list-strings/list-strings.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Angular Practice | Home',
        component: ColorClockComponent
    },
    {
        path: 'task',
        title: 'Angular Practice | Task Manager',
        component: ListStringsComponent
    }
];
