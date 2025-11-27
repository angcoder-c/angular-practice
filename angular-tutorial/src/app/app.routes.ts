import { Routes } from '@angular/router';
import { ListStringsComponent } from './components/list-strings/list-strings.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Angular Practice | Home',
        component: HomeComponent
    },
    {
        path: 'task',
        title: 'Angular Practice | Task Manager',
        component: ListStringsComponent
    }
];
